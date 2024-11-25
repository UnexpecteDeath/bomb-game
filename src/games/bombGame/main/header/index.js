export function Header({balance, setChoiceGame}) {
    return (
        <header className="bg-green-500 rounded-b-md h-20 flex justify-between px-14 items-center text-2xl ">
        <div className="flex gap-2"><button onClick={() => setChoiceGame(null)}>Menu</button></div>
        <div className="flex gap-2">Balance <p id='balance'>{balance}$</p></div>
      </header>
    )
}

