import React, { useState } from 'react';

export default function Modal({resetGame, ...props}: any) {

    return (
        <div className={`Modal ${props.gameLost || props.gameWon || props.cashedOut ? 'enabled' : ''}`}>
            <h1>{props.gameWon ? "Congratulations!" : props.gameLost ? "Game Over" : "Cashed Out"}</h1>
            <p>{
                props.gameWon ? "You've found all the gems!" : 
                props.gameLost ? "You've lost the game!" : 
                "Your winnings will be added to your wallet"
            }</p>
            <button onClick={() => {resetGame()}}>Play again?</button>
        </div>
    );
}
