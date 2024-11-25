import { useEffect, useState } from 'react';
import GameMenu from './GameMenu';
import './App.css'
import BombGame from "./games/bombGame/bombGame";

function App() {
    const [choiceGame, setChoiceGame] = useState(null);
    useEffect(() => {
        if(sessionStorage.choiceGame) {
            setChoiceGame(sessionStorage.choiceGame)
        } else {
            setChoiceGame(null)
        }
    }, [])



    return (
        <>
        {!choiceGame && <GameMenu setChoiceGame={ setChoiceGame } />}
        {choiceGame === "BombGame" && <BombGame setChoiceGame = { setChoiceGame} />}
        </>
    );
}

export default App;