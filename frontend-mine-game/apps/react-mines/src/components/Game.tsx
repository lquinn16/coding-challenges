import React, { useState } from 'react';
import { minesBet, minesCashout, minesNext, CasinoGameMines } from "api";
import Modal from './Modal';

export default function Game() {
    const initialGameState: CasinoGameMines = {
        minesCount: 5,
        mines: [],
        revealedTiles: [],
        state: "idle",
    };

    const [gameState, setGameState] = useState<CasinoGameMines>(initialGameState);
    const [gameStarted, setGameStarted] = useState(false);
    const [gameWon, setGameWon] = useState(false);
    const [gameLost, setGameLost] = useState(false);
    const [tiles, setTiles] = useState<boolean[]>(Array(25).fill(false));
    const [mineIndexes, setMineIndexes] = useState<number[]>(Array.from({length: gameState.minesCount}, () => Math.floor(Math.random() * 24)));
    const [score, setScore] = useState<number>(0);
    const [betAmount, setBetAmount] = useState<number>(0.00000000);
    const [updatedBetAmount, setUpdatedBetAmount] = useState<number>(betAmount);

    const resetGame = () => {
        setGameState(initialGameState);
        setGameStarted(false);
        setGameLost(false);
        setGameWon(false);
        setTiles(Array(25).fill(false));
        setScore(0);
        setBetAmount(0.00000000);
        setUpdatedBetAmount(0);
        setMineIndexes(Array.from({length: gameState.minesCount}, () => Math.floor(Math.random() * 24)));
    }

    const hasGameStarted = (betMade: boolean) => {
        gameState.state === 'progress' || betMade ? setGameStarted(true) : setGameStarted(false);
    };

    const isGameWon = () => {
        const totalGems = 25 - gameState.minesCount;
        totalGems === gameState.revealedTiles.length ? setGameWon(true) : setGameWon(false);
    }

    const isGameLost = (index: number) => {
        index in mineIndexes ? setGameLost(true) : setGameLost(false);
    }

    const gemAudio = new Audio("/gem.mp3");
    const mineAudio = new Audio("/mine.mp3");

    const playAudio = (index: number) => {
        index in mineIndexes ? mineAudio.play() : gemAudio.play();
    }

    const handleTileClick = async (index: number) => {
        const newTiles = [...tiles];
        newTiles[index] = !newTiles[index];
        setTiles(newTiles);

        playAudio(index);

        if (gameState.state === 'idle') {
            let newState = await minesBet();
            setGameState(newState);
            hasGameStarted(true);
        } 

        let newState = await minesNext(index);
        setGameState(newState);

        isGameLost(index);
        !gameLost ? setScore(score + 1) : setScore(0);
        isGameWon();
        gameWon ? minesCashout() : console.log("continue");
    }

    const handleBetChange = (event: any) => {
        setBetAmount(event.target.value);
    };

    const handleBet = async () => {
        let newState = await minesBet();
        setGameState(newState);
        hasGameStarted(true);
        setUpdatedBetAmount(betAmount);
    }

    const BetButton = () => {
        return <button id={'betBtn'} disabled={gameStarted} onClick={handleBet}>Bet</button>;
    };
    
    const handleCashout = async () => {
        let newState = await minesCashout();
        setGameState(newState);
    }

    const CashoutButton = () => {
        return (
            <button id={'cashoutBtn'} disabled={gameState.state !== 'progress'} onClick={handleCashout}>
                Cashout
            </button>
        );
    }

    return (
        <div className={'Game'}>
            <h2>Score: {score}</h2>
            <div className="GameGrid">
                <div className={`grid ${gameLost ? 'disabled' : ''}`}>
                    {tiles.map((tile, index) => (
                        <div
                            key={index}
                            className={`tile ${tile ? 'revealed' : ''} ${gameLost || gameState.state === 'cashout' ? 'disabled' : ''}`}
                            onClick={() => handleTileClick(index)} 
                        >
                            <img 
                                key={index} 
                                src={index in mineIndexes ? require('../assets/mine.png') : require('../assets/gem.png')}
                                alt={index in mineIndexes? 'mine' : 'gem'}
                            />
                        </div>
                    ))}
                </div>
            <Modal 
                cashedOut={gameState.state === 'cashout'} 
                gameLost={gameLost} 
                gameWon={gameWon} 
                resetGame={resetGame}
            />
            </div>
            <div className="GameOptions">
                <span>Bet Amount ${betAmount}</span>
                <input
                    type="text"
                    id="betAmount"
                    name="betAmount"
                    onChange={handleBetChange}
                    value={betAmount}
                    disabled={gameStarted}
                />
                <BetButton />
                <CashoutButton/>
            </div>
        </div>
    );
}
