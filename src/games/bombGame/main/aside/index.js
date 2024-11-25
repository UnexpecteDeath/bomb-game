
import {x3Bombs , x5Bombs, x10Bombs, x24Bombs} from "../../main/x"

export function Aside({ setBombs, render, play, betValue, setBetValue, click, textTakeBtn, balance, setBalance, bombs, gameOver }) {

    const handleChange = (event) => {
        setBetValue(event.target.value);
    };

    function take() {
        if(click === 0) return;
        let winBet = bombs === 3 ? x3Bombs[click] : bombs === 5 ? x5Bombs[click] : bombs === 10 ? x10Bombs[click] : x24Bombs[click];
        setBalance(balance + betValue*winBet)
        localStorage.setItem('balance', balance + betValue*winBet);
        gameOver()
    }

    return (
            <aside className="bg-green-500 w-1/6 rounded-lg px-4">
                <p className="text-2xl mt-4">Bet amount</p>
                <input id="input" className="outline-none w-64 mt-4 h-10 rounded-md bg-green-200 px-2" type="number" value={ betValue } onChange={ handleChange }></input>
                <p className="text-2xl mt-8">Number of bombs</p>
                <div className="flex gap-5 mt-6">
                    <button className="w-12 h-12 bg-green-200 rounded-lg"  onClick={() => setBombs(3)}>3</button>
                    <button className="w-12 h-12 bg-green-200 rounded-lg" onClick={() => setBombs(5)}>5</button>
                    <button className="w-12 h-12 bg-green-200 rounded-lg" onClick={() => setBombs(10)}>10</button>
                    <button className="w-12 h-12 bg-green-200 rounded-lg" onClick={() => setBombs(24)}>24</button>
                </div>
                <button className={`bg-green-200 w-64 mt-6 h-12 rounded-lg text-xl ${ play ? "hidden" : ""}`} onClick={() => render(betValue)}>Play</button>
                <button className={`bg-green-200 w-64 mt-6 h-12 rounded-lg text-xl ${ play ? "" : "hidden"}`} onClick={ take }>{textTakeBtn}</button>
            </aside>
    )
}