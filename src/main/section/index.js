import dollar from "../../images/dollar.svg"
import bomb from "../../images/bomb.svg"
import style from "./index.module.css"
import React, { useState } from 'react';
import death from "../../images/death.svg";
import {x3Bombs , x5Bombs, x10Bombs, x24Bombs} from "../../main/x";

export function Section({ bombs,  mines, setMines, play, setPlay, setClick, click, setTextTakeBtn, gameOver }) {

    function handleClick() {
        let text = bombs === 3 ? `Take ${x3Bombs[click]}` : bombs === 5 ? `Take ${x5Bombs[click]}` : bombs === 10 ? `Take ${x10Bombs[click]}` : `Take ${x24Bombs[click]}`;
        setTextTakeBtn(text)
    }

    function selectCell(index) {
        const updatedMines = mines.map((mine, i) => {
            if (i === index) {
                if(mine.type == "death") {
                    gameOver()
                } else {
                    setClick(++click)
                    handleClick()
                    return { ...mine, clicked: true };
                }
            }
            return mine;
        });

        setMines(updatedMines);
    }


    return (
        <section className={style.gameBar}>
            <div className={style.dollars}><img className={style.dollar} src={dollar} alt=""></img><p className={style.countDollars}>{25 - bombs}</p></div>
            <div id={play ? style.playing : style.death }></div>
            <div className={style.minefield}>{mines.map((mine, index) => (

                <div onClick={() => selectCell(index)} key={mine.id} className={style.mine}>
                    <img src={mine.type === "death" ? death : dollar} className={mine.clicked ? style.mineImgVis : style.mineImgHid}></img>
                </div>
            ))}</div>

            <div className={style.bombs}><img className={style.bomb} src={bomb} alt=""></img><p className={style.countBombs}>{ bombs }</p></div>
        </section>
    )
}
