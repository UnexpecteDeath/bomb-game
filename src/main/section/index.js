import dollar from "../../images/dollar.svg"
import bomb from "../../images/bomb.svg"
import death from "../../images/death.svg";
import {x3Bombs , x5Bombs, x10Bombs, x24Bombs} from "../../main/x";

export function Section({ bombs,  mines, setMines, play, setClick, click, setTextTakeBtn, gameOver }) {

    function handleClick() {
        let text = bombs === 3 ? `Take ${x3Bombs[click]}` : bombs === 5 ? `Take ${x5Bombs[click]}` : bombs === 10 ? `Take ${x10Bombs[click]}` : `Take ${x24Bombs[click]}`;
        setTextTakeBtn(text)
    }

    function selectCell(index) {
        const mine = mines[index];
        if (mine.type === "death") {
            gameOver();
            return;
        }

        const updatedMines = mines.map((m, i) =>
            i === index ? { ...m, clicked: true } : m
        );
        setMines(updatedMines);
        setClick(++click);
        handleClick();
    }


    return (
        <section className="bg-green-500 w-1/2 h-[65vh] rounded-lg px-8 flex items-center justify-between relative">
            <div className="flex items-center text-2xl w-16"><img className="w-12" src={dollar} alt=""></img><p className="">{25 - bombs}</p></div>
            <div className={`absolute inset-0 pointer-events-none bg-gray-400/30 ${play ? "hidden" : ''}`}></div>
            <div className="w-[55%] aspect-[1/1] bg-green-200 rounded-md flex flex-wrap items-center justify-center">{mines.map((mine, index) => (

                <div onClick={() => selectCell(index)} key={mine.id}  className={`w-20 h-20 rounded-lg bg-green-500 flex justify-center items-center m-2 hover:bg-green-400 ${mine.clicked ? "pointer-events-none" : ""}`}>
                    <img src={mine.type === "death" ? death : dollar} className={`w-[75%] ${mine.clicked ? "" : "hidden"}`}></img>
                </div>
            ))}</div>

            <div className="flex items-center text-2xl w-16"><img className="w-12" src={bomb} alt=""></img><p className="">{ bombs }</p></div>
        </section>
    )
}
