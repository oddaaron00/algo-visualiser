import '../styles/Menu.css';
import * as i from '../interfaces/IMenu';

export default function Menu({ sortingAlgs, currentAlg, setAlg, resetGrid, randomiseData, visualise, speed, setSpeed }: i.Menu) {

    return (
        <header id='menu'>
            <label htmlFor='sortingAlgorithms'>Algorithm: </label>
            <select id='sortingAlgorithms' value={currentAlg} onChange={e => setAlg(e.target.value)}>
                {sortingAlgs.map(alg => <option key={alg} value={alg}>{alg}</option>)}
            </select>
            <input type='number' id='speed' name='speed' value={speed} onChange={e => setSpeed(Number(e.target.value))}></input>
            <button id='visualiseButton' onClick={visualise}>Visualise</button>
            <button id='randomiseButton' onClick={randomiseData}>Randomise data</button>
            <button id='resetButton' onClick={resetGrid}>Reset grid</button>
        </header>
    )
}