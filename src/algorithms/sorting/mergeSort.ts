import { State } from "../../interfaces/ICell";

export default async function sort(array: number[], setArray: (newArray: number[]) => void, stateArr: State[], setStateArr: (newStateArr: State[]) => void, speed: number) {
    function TopDownMergeSort(A: number[], B: number[], n: number) {
        CopyArray(A, 0, n, B);
        TopDownSplitMerge(B, 0, n, A);
    }
    
    function TopDownSplitMerge(B: number[], iBegin: number, iEnd: number, A: number[]) {
        if (iEnd - iBegin <= 1) {
            return;
        }
        let iMiddle = Math.floor((iEnd + iBegin) / 2);
        TopDownSplitMerge(A, iBegin, iMiddle, B);
        TopDownSplitMerge(A, iMiddle, iEnd, B);
        TopDownMerge(B, iBegin, iMiddle, iEnd, A);
    }
    
    function TopDownMerge(A: number[], iBegin: number, iMiddle: number, iEnd: number, B: number[]) {
        let i = iBegin;
        let j = iMiddle;
    
        for (let k = iBegin; k < iEnd; k++) {
            if (i < iMiddle && (j >= iEnd || A[i] <= A[j])) {
                B[k] = A[i];
                stateArr[i] = State.Sorted;
                setStateArr([...stateArr]);
                i++;
            } else {
                B[k] = A[j];
                stateArr[j] = State.Sorted;
                setStateArr([...stateArr]);
                j++;
            }
        }
    }
    
    function CopyArray(A: number[], iBegin: number, iEnd: number, B: number[]) {
        for (let k = iBegin; k < iEnd; k++) {
            B[k] = A[k];
        }
    }

    let sortedArr: number[] = [];
    console.log(array, sortedArr);
    TopDownMergeSort(array, sortedArr, array.length);
    console.log(array, sortedArr);
    setArray([...array]);
}