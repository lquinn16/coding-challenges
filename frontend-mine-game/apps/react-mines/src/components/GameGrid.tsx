import React, { useState } from 'react';
import { minesBet, minesCashout, minesNext, CasinoGameMines } from "../../../../packages/api/src/index";
import Modal from './Modal';

export default function GameGrid({handleTileClick, ...props}: any) {

    return (
        <div className="GameGrid">
                <div className={`grid ${props.gameLost ? 'disabled' : ''}`}>
                    {props.tiles.map((tile: boolean, index: number) => (
                        <div
                            key={index}
                            className={`tile ${tile ? 'revealed' : ''} ${props.gameLost || props.gameState.state === 'cashout' ? 'disabled' : ''}`}
                            onClick={() => handleTileClick(index)} 
                        >
                            <img 
                                key={index} 
                                src={index in props.mineIndexes ? require('../assets/mine.png') : require('../assets/gem.png')}
                                alt={index in props.mineIndexes? 'mine' : 'gem'}
                            />
                        </div>
                    ))}
                </div>
            </div>
    );
}
