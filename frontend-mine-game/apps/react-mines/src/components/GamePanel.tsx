import React, { useState } from 'react';
import GameGrid from './GameGrid';
import GameOptions from './GameOptions';
import { minesBet, minesCashout, minesNext, CasinoGameMines } from "api";

export default function GamePanel() {

    const initialGameState: CasinoGameMines = {
        minesCount: 5,
        mines: [],
        revealedTiles: [],
        state: "idle",
    };

    const [gameState, setGameState] = useState<CasinoGameMines>(initialGameState);

    const betCallback = async () => {
        const game = await minesBet();
        setGameState(game);
        console.log(game);
    };

    // const handleTileClick = async (tileIndex) => {
    // if (
    //     gameState.state !== "progress" ||
    //     gameState.revealedTiles.includes(tileIndex)
    // ) {
    //     return;
    // }

    // const game = await minesNext(tileIndex);
    //     setGameState(game);
    // };

    return (
        <div className="GamePanel">
            <GameGrid/>
            <GameOptions handleBet={betCallback}/>
        </div>
    );
}
