import { Aside } from "./aside"
import { Section } from "./section"
import { useState } from 'react';

export function Main({setBombs, bombs, balance, setBalance}) {
    const [mines, setMines] = useState([]);
    const [play, setPlay] = useState(false)
    const [betValue, setBetValue] = useState(1)
    const [click, setClick] = useState(0)
    const [textTakeBtn, setTextTakeBtn] = useState();


    function gameOver() {
        setPlay(false)
        setClick(0)
        setTextTakeBtn('Select cell')
        mines.forEach(mine => {
            return mine.clicked = true
        });
    }

    function render(betValue) {
        if(betValue <= 0 && balance <= 0) return;
        setBalance(balance - betValue)
        setPlay(true)
        setTextTakeBtn('Select cell')
        const newMines = [];
        let random = getRandomInt(1, 25, bombs)
        let element = 0;
        for(let i = 0; i < 25; i++) {
            element += 1;
            const explosion = random.indexOf(element) !== -1;
            newMines.push({
                id: i,
                type: explosion ? "death" : "dollar",
                clicked: false,
            })
        }
        setMines(newMines)
    }


    function getRandomInt(min, max, count) {
        let uniqueSet = new Set();
        while (uniqueSet.size < count) {
            const num = Math.floor(Math.random() * (max - min + 1)) + min;
            uniqueSet.add(num);
        }
        return Array.from(uniqueSet);
    }

    return (
        <main className="mt-32 flex justify-center gap-x-96">
            <Aside gameOver={ gameOver } bombs={ bombs } balance={ balance } setBalance={ setBalance } textTakeBtn={ textTakeBtn } click={click} betValue={ betValue } setBetValue={ setBetValue } play={ play } setBombs={ setBombs } render={ render }/>
            <Section gameOver={ gameOver } setTextTakeBtn={ setTextTakeBtn } click={ click } setClick={ setClick } setPlay={ setPlay }  play={ play } bombs={ bombs } mines={ mines } setMines={ setMines }/>
        </main>
    )
}