import React, { useState } from 'react';
import GameGrid from './GameGrid';
import GameOptions from './GameOptions';

export default function GamePanel() {

    return (
        <div className="GamePanel">
            <GameGrid/>
            <GameOptions/>
        </div>
    );
}
