import React, { useState } from 'react';

export default function Modal(props: any) {

    return (
        <div className={`Modal ${props.gameLost || props.gameWon ? 'enabled' : ''}`}>
            <h1>{props.gameWon ? "Congratulations!" : "Game Over"}</h1>
            <p>{props.gameWon ? "You've found all the mines!" : "You've lost the game!"}</p>
            <button onClick={() => props.resetGame()}>Play again?</button>
        </div>
    );
}
