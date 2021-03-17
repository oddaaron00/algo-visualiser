import React, { useState } from 'react';
import './styles/App.css';
import Menu from './components/Menu';
import Grid from './components/Grid';
import visualiseAlgo from './algorithms/visualise';
import { State } from './interfaces/ICell';

function App() {

  let cellSize = 20;
  let gridHeight = window.innerHeight * 0.8;
  let gridWidth = window.innerWidth * 0.8;

  const initGrid = (): number[] => {
    return new Array(Math.floor(gridWidth / cellSize)).fill(0);
  }
  const initStateArr = (): State[] => {
    return new Array(Math.floor(gridWidth / cellSize)).fill(State.Empty);
  }

  const [gridArr, setGridArr] = useState(initGrid());
  const [stateArr, setStateArr] = useState(initStateArr());

  const [speed, setSpeed] = useState(250);

  const sortingAlgs = [
    'Selection sort',
    'Insertion sort',
    'Bubble sort',
    //Merge sort
    //Quicksort
    //Heapsort
    //Counting sort
    //Radix sort
    //Bucket sort
    //Bogosort
  ]

  const [algorithm, setAlgorithm] = useState(sortingAlgs[0])

  const resetGrid = () => setGridArr(initGrid());

  const randomiseData = () => {
    const newArr = [];
    for (let i = 0; i < Math.floor(gridWidth / cellSize); i++) {
      newArr.push(Math.floor(Math.random() * (gridHeight / cellSize)) + 1);
    }
    setStateArr(new Array(Math.floor(gridWidth / cellSize)).fill(State.Filled));
    setGridArr(newArr);
  }

  const visualise = () => {
    visualiseAlgo(algorithm, gridArr, setGridArr, stateArr, setStateArr, speed);
  }

  return (
    <div className="App">
      <Menu sortingAlgs={sortingAlgs} currentAlg={algorithm} setAlg={setAlgorithm} resetGrid={resetGrid} randomiseData={randomiseData} visualise={visualise} speed={speed} setSpeed={setSpeed}/>
      <Grid cellSize={cellSize} gridHeight={gridHeight} gridWidth={gridWidth} gridArr={gridArr} setGridArr={setGridArr} stateArr={stateArr} setStateArr={setStateArr}/>
    </div>
  );
}

export default App;
