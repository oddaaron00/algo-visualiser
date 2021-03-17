import { State } from "../interfaces/ICell";
import selectionSort from "./sorting/selectionSort";
import insertionSort from './sorting/insertionSort';
import bubbleSort from './sorting/bubbleSort';
import mergeSort from './sorting/mergeSort';

export default function visualise(algorithm: string, array: number[], setGridArr: (newGridArr: number[]) => void, stateArr: State[], setStateArr: (newStateArr: State[]) => void, speed: number) {
    switch (algorithm) {
        case 'Selection sort':
            selectionSort(array, setGridArr, stateArr, setStateArr, speed);
            break;
        case 'Insertion sort':
            insertionSort(array, setGridArr, stateArr, setStateArr, speed);
            break;
        case 'Bubble sort':
            bubbleSort(array, setGridArr, stateArr, setStateArr, speed);
            break;
        case 'Merge sort':
            mergeSort(array, setGridArr, stateArr, setStateArr, speed);
            break;
    }
}