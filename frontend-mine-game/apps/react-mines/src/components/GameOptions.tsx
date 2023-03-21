import React, { useState } from 'react';

export default function GameOptions({handleBet, handleCashout, ...props}: any) {
    const [betAmount, setBetAmount] = useState<number>(0.00000000);

    const handleBetChange = (event: any) => {
        setBetAmount(event.target.value);
    };

    const BetButton = () => {
        return <button id={'betBtn'} disabled={props.gameStarted} onClick={() => handleBet(betAmount)}>Bet</button>;
    };

    const CashoutButton = () => {
        return (
            <button id={'cashoutBtn'} disabled={!props.gameStarted} onClick={handleCashout}>
                Cashout
            </button>
        );
    }

    return (
        <div className="GameOptions">
                <h3>Bet Amount ${betAmount}</h3>
                <input
                    type="text"
                    id="betAmount"
                    name="betAmount"
                    onChange={handleBetChange}
                    value={betAmount}
                    disabled={props.gameStarted}
                />
                <BetButton />
                <CashoutButton/>
            </div>
    );
}
