import style from "./index.module.css"
import {x3Bombs , x5Bombs, x10Bombs, x24Bombs} from "../../main/x"

export function Aside({ setBombs, render, play, betValue, setBetValue, click, textTakeBtn, balance, setBalance, bombs, gameOver }) {

    const handleChange = (event) => {
        setBetValue(event.target.value);
    };

    function take() {
        if(click === 0) return;
        let winBet = bombs === 3 ? x3Bombs[click] : bombs === 5 ? x5Bombs[click] : bombs === 10 ? x10Bombs[click] : x24Bombs[click];
        setBalance(balance + betValue*winBet)
        gameOver()
    }

    return (
            <aside className={style.setBar}>
                <p className={style.betAmount}>Bet amount</p>
                <input id="input" className={style.betAmountInput} type="number" value={ betValue } onChange={ handleChange }></input>
                <p className={style.numberOfBombs}>Number of bombs</p>
                <div className={style.bombsBtns}>
                    <button id="3bombs" onClick={() => setBombs(3)}>3</button>
                    <button id="5bombs" onClick={() => setBombs(5)}>5</button>
                    <button id="10bombs" onClick={() => setBombs(10)}>10</button>
                    <button id="24bombs" onClick={() => setBombs(24)}>24</button>
                </div>
                <button id={play ? style.playHid : style.play} onClick={() => render(betValue)}>Play</button>
                <button id={play ? style.take : style.takeHid} onClick={ take }>{textTakeBtn}</button>
            </aside>
    )
}