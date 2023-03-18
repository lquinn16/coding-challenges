import React, { useState } from 'react';

export default function GameGrid() {
    const [tiles, setTiles] = useState(Array(25).fill(false));

    const handleClick = (index: number) => {
        const newTiles = [...tiles];
        newTiles[index] = !newTiles[index];
        setTiles(newTiles);
    };

    return (
        <div className="GameGrid">
            <div className="grid">
                {tiles.map((tile, index) => (
                <div
                    key={index}
                    className={`tile ${tile ? 'active' : ''}`}
                    onClick={() => handleClick(index)}
                />
                ))}
            </div>
        </div>
    );
}
