import { bubbleSort } from "./sorting/bubbleSort";

export default function visualise(algorithm: string, array: number[], setGridArr: (newGridArr: number[]) => void) {
    switch (algorithm) {
        case 'Bubble sort':
            bubbleSort(array, setGridArr);
    }
}