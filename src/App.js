import './App.css';
import { Header } from './header';
import { Main } from './main';
import { useState } from 'react';

function App() {
  const [balance, setBalance] = useState(100);
  const [bombs, setBombs] = useState(3)
  return (
    <>
        <Header balance={balance}/>
        <Main balance={balance} setBalance={setBalance} bombs={bombs}  setBombs={setBombs}/>
    </>
  );
}

export default App;
