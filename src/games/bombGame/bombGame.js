import { Header } from './main/header/index';
import { Main } from './main/index';
import { useState, useEffect } from 'react';

function BombGame({setChoiceGame}) {
  const [balance, setBalance] = useState(0);
  const [bombs, setBombs] = useState(3)
  useEffect(() => {
    if(localStorage.balance) {
      const balance = Number(localStorage.getItem('balance'));
      setBalance(balance)
    } else {
      const startBalance = 100;
      localStorage.setItem('balance', startBalance);
    }
  }, [])

  return (
    <>
        <Header balance={balance} setChoiceGame = { setChoiceGame }/>
        <Main balance={balance} setBalance={setBalance} bombs={bombs}  setBombs={setBombs}/>
    </>
  );
}

export default BombGame;
