import React, { useState } from 'react';

export default function GameOptions() {
    const [amount, setAmount] = useState(0.00000000);
    const [updatedAmount, setUpdatedAmount] = useState(amount);
    const [betMade, setBetMade] = useState(false);
    // const [mines, setMines] = useState(3);


    const handleChange = (event: any) => {
        setAmount(event.target.value);
    };

    const handleClick = () => {
        setUpdatedAmount(amount);
        setBetMade(true);
    };

    const BetButton = () => {
        return <button id={'betBtn'} disabled={betMade} onClick={handleClick}>Bet</button>;
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
                onChange={handleChange}
                value={amount}
                disabled={betMade}
            />
            <BetButton />
            <CashoutButton/>
        </div>
    );
}
