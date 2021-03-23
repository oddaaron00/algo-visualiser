import "purecss/build/pure.css";
import "../styles/Menu.css";
import * as i from "../interfaces/IMenu";

export default function Menu({
  sortingAlgs,
  currentAlg,
  setAlg,
  resetGrid,
  randomiseData,
  visualise,
  speed,
  setSpeed,
  isRunning
}: i.Menu) {
  return (
    <header id="menu">
      <form className="pure-form">
        <fieldset>
          <div className="outerContainer">
            <div className="selectGroup">
              <label className="selectLabel" htmlFor="sortingAlgorithms">
                Algorithm
              </label>
              <select
                id="sortingAlgorithms"
                value={currentAlg}
                disabled={isRunning}
                onChange={(e) => setAlg(e.target.value)}
              >
                {sortingAlgs.map((alg) => (
                  <option key={alg} value={alg}>
                    {alg}
                  </option>
                ))}
              </select>
            </div>
            <div className="selectGroup">
              <label className="selectLabel" htmlFor="speed">
                Speed per step (milliseconds)
              </label>
              <input
                type="number"
                id="speed"
                name="speed"
                value={speed}
                disabled={isRunning}
                onChange={(e) => setSpeed(Number(e.target.value))}
              ></input>
            </div>
          </div>
          <div className="pure-button-group" role="group">
            <button
              id="randomiseButton"
              className="pure-button"
              disabled={isRunning}
              onClick={(e) => {
                e.preventDefault();
                randomiseData();
              }}
            >
              Randomise data
            </button>
            <button
              id="visualiseButton"
              type="submit"
              disabled={isRunning}
              className="pure-button pure-button-primary"
              onClick={(e) => {
                e.preventDefault();
                visualise();
              }}
            >
              Visualise
            </button>
            <button
              id="resetButton"
              className="pure-button"
              disabled={isRunning}
              onClick={(e) => {
                e.preventDefault();
                resetGrid();
              }}
            >
              Reset grid
            </button>
          </div>
        </fieldset>
      </form>
    </header>
  );
}
