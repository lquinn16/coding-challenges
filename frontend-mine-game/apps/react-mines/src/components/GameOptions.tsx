import React, { useState } from 'react';
import { minesBet, minesCashout, minesNext, CasinoGameMines } from "api";

export default function GameOptions({handleBet, ...props}: any) {
    const [amount, setAmount] = useState(0.00000000);
    const [updatedAmount, setUpdatedAmount] = useState(amount);
    const [betMade, setBetMade] = useState(false);
    // const [mines, setMines] = useState(3);


    const handleBetChange = (event: any) => {
        setAmount(event.target.value);
    };

    const handleBetClick = () => {
        setUpdatedAmount(amount);
        setBetMade(true);
    };

    const BetButton = () => {
        return <button id={'betBtn'} disabled={betMade} onClick={handleBetClick}>Bet</button>;
    };
    
    const CashoutButton = ({ onClick, disabled }: any) => {
        return (
            <button id={'cashoutBtn'} onClick={onClick} disabled={disabled}>
                Cashout
            </button>
        );
    };

    return (
        <div className="GameOptions">
            <span>Bet Amount ${amount}</span>
            <input
                type="text"
                id="betAmount"
                name="betAmount"
                onChange={handleBetChange}
                value={amount}
                disabled={betMade}
            />
            <BetButton />
            <CashoutButton/>
        </div>
    );
}
