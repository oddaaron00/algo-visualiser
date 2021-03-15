import '../styles/Menu.css';
import * as i from '../interfaces/IMenu';

export default function Menu({ sortingAlgs, currentAlg, setAlg, resetGrid, randomiseData, visualise }: i.Menu) {

    return (
        <header id='menu'>
            <label htmlFor='sortingAlgorithms'>Algorithm: </label>
            <select id='sortingAlgorithms' value={currentAlg} onChange={e => setAlg(e.target.value)}>
                {sortingAlgs.map(alg => <option key={alg} value={alg}>{alg}</option>)}
            </select>
            <button id='visualiseButton' onClick={visualise}>Visualise</button>
            <button id='randomiseButton' onClick={randomiseData}>Randomise data</button>
            <button id='resetButton' onClick={resetGrid}>Reset grid</button>
        </header>
    )
}