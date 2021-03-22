import { State } from "../interfaces/ICell";
import selectionSort from "./sorting/selectionSort";
import insertionSort from "./sorting/insertionSort";
import bubbleSort from "./sorting/bubbleSort";
import mergeSortTopDown from "./sorting/mergeSortTopDown";
import mergeSortBottomUp from "./sorting/mergeSortBottomUp";

export default async function visualise(
  algorithm: string,
  array: number[],
  setGridArr: (newGridArr: number[]) => void,
  stateArr: State[],
  setStateArr: (newStateArr: State[]) => void,
  speed: number
) {
  switch (algorithm) {
    case "Selection sort":
      await selectionSort(array, setGridArr, stateArr, setStateArr, speed);
      break;
    case "Insertion sort":
      await insertionSort(array, setGridArr, stateArr, setStateArr, speed);
      break;
    case "Bubble sort":
      await bubbleSort(array, setGridArr, stateArr, setStateArr, speed);
      break;
    case "Merge sort (top-down)":
      await mergeSortTopDown(array, setGridArr, stateArr, setStateArr, speed);
      break;
    case "Merge sort (bottom-up)":
      await mergeSortBottomUp(array, setGridArr, stateArr, setStateArr, speed);
      break;
    default:
      break;
  }
}
