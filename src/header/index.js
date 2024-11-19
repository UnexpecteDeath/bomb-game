import logo from "../images/dollar-bill.svg"
import style from "./index.module.css"

 export function Header({balance}) {
    return (
        <header>
        <div className={style.logo}><p>Freebie</p><img src={logo} alt=""></img></div>
        <div className={style.balanceCont}>Balance <p id='balance'>{balance}$</p></div>
      </header>
    )
}

