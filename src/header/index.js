import logo from "../images/dollar-bill.svg"

 export function Header({balance}) {
    return (
        <header className="bg-green-500 rounded-b-md h-20 flex justify-between px-14 items-center text-2xl ">
        <div className="flex gap-2"><p>Freebie</p><img className="w-10" src={logo} alt=""></img></div>
        <div className="flex gap-2">Balance <p id='balance'>{balance}$</p></div>
      </header>
    )
}

