import 'purecss/build/pure.css';
import '../styles/Menu.css';
import * as i from '../interfaces/IMenu';

export default function Menu({ sortingAlgs, currentAlg, setAlg, resetGrid, randomiseData, visualise, speed, setSpeed }: i.Menu) {

    return (
        <header id='menu' className='pure-form'>
            <fieldset>
                <label htmlFor='sortingAlgorithms'>Algorithm: 
                <select id='sortingAlgorithms' value={currentAlg} onChange={e => setAlg(e.target.value)}>
                    {sortingAlgs.map(alg => <option key={alg} value={alg}>{alg}</option>)}
                </select>
                </label>
                <input type='number' id='speed' name='speed' value={speed} onChange={e => setSpeed(Number(e.target.value))}></input>
                <button id='visualiseButton' className='pure-button pure-button-primary' onClick={visualise}>Visualise</button>
                <button id='randomiseButton' className='pure-button' onClick={randomiseData}>Randomise data</button>
                <button id='resetButton' className='pure-button' onClick={resetGrid}>Reset grid</button>
            </fieldset>
        </header>
    )
}