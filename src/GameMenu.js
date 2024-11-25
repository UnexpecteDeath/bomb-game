import gamesData from './GameData';

function GameMenu({ setChoiceGame }) {

    function handleClick(props) {
        sessionStorage.setItem('choiceGame', props)
        setChoiceGame(props)
    }

    return (
        <>
        <header className="flex bg-gray-500 h-20 justify-center items-center mb-40">
            <p className='text-2xl'>Indi Game Center</p>
        </header>
        <main className='flex px-10'>
            {gamesData.map((game) => (
                <div key={game.id} className='bg-gray-500 w-[280px] h-52 rounded-lg flex hover:bg-gray-500/90 flex-col items-center gap-6' onClick={() => handleClick(game.component)}>
                <p className='px-0 py-0 text-2xl'>Card Game</p>
                <img className='w-20 mb-2' src={game.image} alt=''></img>
                <p className='px-0 py-0 text-xl'>{game.description}</p>
                </div>
            ))}
        </main>
        </>
    );
}

export default GameMenu;