import { State } from "../../interfaces/ICell";

export default async function sort(array: number[], setArray: (newArray: number[]) => void, stateArr: State[], setStateArr: (newStateArr: State[]) => void, speed: number) {
    function quicksort(A: number[], lo: number, hi: number) {
        if (lo < hi) {
            let p = partition(A, lo, hi);
            quicksort(A, lo, p - 1);
            quicksort(A, p + 1, hi);
        }
    }

    function partition(A: number[], lo: number, hi: number) {
        let pivot = A[hi];
        let i = lo;
        for (let j = lo; j <= hi; j++) {
            if (A[j] < pivot) {
                [A[i], A[j]] = [A[j], A[i]];
                i++;
            }
        }
        [A[i], A[hi]] = [A[hi], A[i]];
        return i;
    }
}