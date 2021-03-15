import React, { useState } from 'react';
import './styles/App.css';
import Menu from './components/Menu';
import Grid from './components/Grid';
import visualiseAlgo from './algorithms/visualise';

function App() {

  let cellSize = 25;
  let gridHeight = window.innerHeight * 0.8;
  let gridWidth = window.innerWidth * 0.8;

  const initGrid = (): number[] => {
    return new Array(Math.floor(gridWidth / cellSize)).fill(0);
  }

  const [gridArr, setGridArr] = useState(initGrid());

  const sortingAlgs = [
    'Bubble sort',
    'Quicksort'
  ]

  const [algorithm, setAlgorithm] = useState(sortingAlgs[0])

  const resetGrid = () => setGridArr(initGrid());

  const randomiseData = () => {
    const newArr = [];
    for (let i = 0; i < Math.floor(gridWidth / cellSize); i++) {
      newArr.push(Math.floor(Math.random() * (gridHeight / cellSize)) + 1);
    }
    setGridArr(newArr);
  }

  const visualise = () => {
    visualiseAlgo(algorithm, gridArr, setGridArr);
  }

  return (
    <div className="App">
      <Menu sortingAlgs={sortingAlgs} currentAlg={algorithm} setAlg={setAlgorithm} resetGrid={resetGrid} randomiseData={randomiseData} visualise={visualise}/>
      <Grid cellSize={cellSize} gridHeight={gridHeight} gridWidth={gridWidth} gridArr={gridArr} setGridArr={setGridArr}/>
    </div>
  );
}

export default App;
