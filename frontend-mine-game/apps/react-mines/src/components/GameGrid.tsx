import React, { useState } from 'react';
// import { minesBet } from "api"

export default function GameGrid() {
    const [tiles, setTiles] = useState<boolean[]>(Array(25).fill(false));
    const [gameOver, setGameOver] = useState<boolean>(false);
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

    const isGameOver = (index: number) => {
        isMine(index) ? setGameOver(true) : setGameOver(false);
        console.log('gameOver:', gameOver);
    }

    const handleClick = (index: number) => {
        const newTiles = [...tiles];
        newTiles[index] = !newTiles[index];
        setTiles(newTiles);

        playAudio(index);

        isGameOver(index);

        !gameOver ? setScore(score + 1) : setScore(0);
        console.log('score:', score);
    };

    return (
        <div className="GameGrid">
            <div className={`grid ${gameOver ? 'disabled' : ''}`}>
                {tiles.map((tile, index) => (
                    <div
                        key={index}
                        className={`tile ${tile ? 'active' : ''} ${gameOver ? 'disabled' : ''}`}
                        onClick={() => handleClick(index)} 
                    >
                        <img key={index} src={index in mineIndexes ? require('../assets/mine.png') : require('../assets/gem.png')}/>
                    </div>
                ))}
            </div>
            
        </div>
    );
}
