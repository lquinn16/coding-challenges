import React, { useState } from 'react';
import { minesBet, minesCashout, minesNext, CasinoGameMines } from "../../../../packages/api/src/index";
import Modal from './Modal';

export default function GameGrid() {
    const [tiles, setTiles] = useState<boolean[]>(Array(25).fill(false));
    const [reset, setReset] = useState<boolean>(false);
    const [gameLost, setGameLost] = useState<boolean>(false);
    const [gameWon, setGameWon] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);

    

    const gemAudio = new Audio("/gem.mp3");
    const mineAudio = new Audio("/mine.mp3");

    const numMines = 5;
    const mineIndexes = Array.from({length: numMines}, () => Math.floor(Math.random() * 24));

    const isMine = (index: number) => index in mineIndexes;

    const playAudio = (index: number) => {
        isMine(index) ? mineAudio.play() : gemAudio.play();
    }

    const isGameLost = (index: number) => {
        if (isMine(index)) {
            setGameLost(true);
        } else {
            setGameLost(false);
        }
        console.log('gameLost:', gameLost);
    }

    const isGameWon = () => {
        const revealedGems = tiles.filter(tile => tile === true).length;
        const totalGems = 25 - numMines;

        setGameWon(revealedGems === totalGems); 
    }

    const handleClick = (index: number) => {
        const newTiles = [...tiles];
        newTiles[index] = !newTiles[index];
        setTiles(newTiles);

        playAudio(index);

        isGameWon();
        isGameLost(index);

        !gameLost ? setScore(score + 1) : setScore(0);
        console.log('score:', score);
        resetGame();
    };

    const resetCallback = () => {
        setReset(true);
    }

    const resetGame = () => {
        if (reset) {
            setGameWon(false);
            setGameLost(false);
            setScore(0);
            setTiles(Array(25).fill(false));
            setReset(false);
        } else {
            return;
        }
    }

    return (
        <div className="GameGrid">
            <div className={`grid ${gameLost ? 'disabled' : ''}`}>
                {tiles.map((tile, index) => (
                    <div
                        key={index}
                        className={`tile ${tile ? 'revealed' : ''} ${gameLost ? 'disabled' : ''}`}
                        onClick={() => handleClick(index)} 
                    >
                        <img 
                            key={index} 
                            src={index in mineIndexes ? require('../assets/mine.png') : require('../assets/gem.png')}
                        />
                    </div>
                ))}
            </div>
            <Modal gameLost={gameLost} gameWon={gameWon} resetGame={resetCallback}/>
        </div>
    );
}
