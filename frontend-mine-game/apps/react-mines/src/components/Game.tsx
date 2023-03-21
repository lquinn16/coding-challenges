import React, { useState } from 'react';
import { minesBet, minesCashout, minesNext, CasinoGameMines } from "api";
import Modal from './Modal';
import GameOptions from './GameOptions';
import GameGrid from './GameGrid';

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
    const [cashedOut, setCashedOut] = useState(false);
    const [tiles, setTiles] = useState<boolean[]>(Array(25).fill(false));
    const [mineIndexes, setMineIndexes] = useState<number[]>(Array.from({length: gameState.minesCount}, () => Math.floor(Math.random() * 24)));
    const [updatedBetAmount, setUpdatedBetAmount] = useState<number>(0);
    const betMultiplier = 1 + gameState.revealedTiles.length / 100;
    const winnings = updatedBetAmount * betMultiplier;
    console.log('updatedBetAmount', updatedBetAmount);

    const resetGame = () => {
        setGameState(initialGameState);
        setGameStarted(false);
        setGameWon(false);
        setGameLost(false);
        setCashedOut(false);
        setTiles(Array(25).fill(false));
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
        isGameWon();
        gameWon ? minesCashout() : console.log("continue");
    }

    const handleBet = async (betAmount: number) => {
        let newState = await minesBet();
        setGameState(newState);
        hasGameStarted(true);
        setUpdatedBetAmount(betAmount);
    }

    const handleCashout = async () => {
        let newState = await minesCashout();
        setGameState(newState);
        setCashedOut(true);
    }

    return (
        <div className={'Game'}>
            <h3>Bet multiplier: x{betMultiplier}</h3>
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
            </div>
            {/* <GameGrid 
                tiles={tiles}
                mineIndexes={mineIndexes}
                handleTileClick={handleTileClick}
                gameLost={gameLost}
                gameState={gameState}
            /> */}
            <GameOptions 
                handleBet={handleBet} 
                handleCashout={handleCashout}
                gameStarted={gameStarted}
            />
            <Modal 
                cashedOut={cashedOut} 
                gameLost={gameLost} 
                gameWon={gameWon} 
                resetGame={resetGame}
                winnings={winnings}
            />
        </div>
    );
}
