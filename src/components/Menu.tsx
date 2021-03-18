import 'purecss/build/pure.css';
import '../styles/Menu.css';
import * as i from '../interfaces/IMenu';

export default function Menu({ sortingAlgs, currentAlg, setAlg, resetGrid, randomiseData, visualise, speed, setSpeed }: i.Menu) {

    return (
        <header id='menu'>
            <form className='pure-form'>
                <fieldset>
                    <div className='outerContainer'>
                        <div className='selectGroup'>
                            <label className='selectLabel' htmlFor='sortingAlgorithms'>Algorithm</label>
                            <select id='sortingAlgorithms' value={currentAlg} onChange={e => setAlg(e.target.value)}>
                                {sortingAlgs.map(alg => <option key={alg} value={alg}>{alg}</option>)}
                            </select>
                        </div>
                        <div className='selectGroup'>
                            <label className='selectLabel' htmlFor='speed'>Speed per step (milliseconds)</label>
                            <input type='number' id='speed' name='speed' value={speed} onChange={e => setSpeed(Number(e.target.value))}></input>
                        </div>
                    </div>
                    <div className='pure-button-group' role='group'>
                        <button id='randomiseButton' disabled={false} className='pure-button' onClick={e => {e.preventDefault(); randomiseData()}}>Randomise data</button>
                        <button id='visualiseButton' type='submit' className='pure-button pure-button-primary' onClick={e => {e.preventDefault(); visualise()}}>Visualise</button>
                        <button id='resetButton' className='pure-button' onClick={e => {e.preventDefault(); resetGrid()}}>Reset grid</button>
                    </div>
                </fieldset>
            </form>
        </header>
    )
}