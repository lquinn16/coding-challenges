import React, { useState } from 'react';

export default function GameOptions({handleBet, handleCashout, minesCallback, ...props}: any) {
    const [betAmount, setBetAmount] = useState<number>(0.00000000);
    const [numMines, setNumMines] = useState<number>(5);
    const numMinesOptions = Array.from({length: 10}, (_, i) => (i+5) + 1);

    const BetInput = () => {
        const handleBetChange = (event: any) => {
            setBetAmount(event.target.value);
        };

        return (
            <input
                type="text"
                id="betAmount"
                name="betAmount"
                onChange={handleBetChange}
                value={betAmount}
                disabled={props.gameStarted}
            />
        );
    }

    const BetButton = () => {
        return (
            <button 
                id={'betBtn'} 
                disabled={props.gameStarted} 
                onClick={() => {handleBet(betAmount); minesCallback(numMines)}}
            >
                Bet
            </button>
        );
    };


    const CashoutButton = () => {
        return (
            <button id={'cashoutBtn'} disabled={!props.gameStarted} onClick={handleCashout}>
                Cashout
            </button>
        );
    }

    const MinesDropdown = () => {
        const handleMinesChange = (event: any) => {
            setNumMines(event.target.value);
        };

        return (
            <select disabled={props.gameStarted} onChange={handleMinesChange}>
                {numMinesOptions.map((option, index) => {
                    return <option key={index} value={option}>{option}</option>
                })}
            </select>
        )
    }

    return (
        <div className="GameOptions">
            <h4>Bet Amount ${betAmount}</h4>
            <BetInput/>
            <BetButton/>
            <CashoutButton/>
            <h4>Mines</h4>
            <MinesDropdown/>
        </div>
    );
}
