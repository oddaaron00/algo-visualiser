import { State } from "../interfaces/ICell";
import selectionSort from "./sorting/selectionSort";

export default function visualise(algorithm: string, array: number[], setGridArr: (newGridArr: number[]) => void, stateArr: State[], setStateArr: (newStateArr: State[]) => void) {
    switch (algorithm) {
        case 'Selection sort':
            selectionSort(array, setGridArr, stateArr, setStateArr);
    }
}