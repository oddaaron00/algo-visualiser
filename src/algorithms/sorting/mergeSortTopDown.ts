import { State } from "../../interfaces/ICell";

export default async function sort(array: number[], setArray: (newArray: number[]) => void, stateArr: State[], setStateArr: (newStateArr: State[]) => void, speed: number) {
    async function TopDownMergeSort(A: number[], B: number[], n: number) {
        CopyArray(A, 0, n, B);
        await TopDownSplitMerge(B, 0, n, A);
    }
    
    async function TopDownSplitMerge(B: number[], iBegin: number, iEnd: number, A: number[]) {
        if (iEnd - iBegin <= 1) {
            return;
        }
        let iMiddle = Math.floor((iEnd + iBegin) / 2);
        await TopDownSplitMerge(A, iBegin, iMiddle, B);
        await TopDownSplitMerge(A, iMiddle, iEnd, B);
        await TopDownMerge(B, iBegin, iMiddle, iEnd, A);
        console.log(iEnd - iBegin)
    }
    
    function TopDownMerge(A: number[], iBegin: number, iMiddle: number, iEnd: number, B: number[]) {
        let i = iBegin;
        let j = iMiddle;

        return new Promise<void>(resolve => {
            let k = iBegin;
            let interval = setInterval(() => {
                if (k < iEnd) {
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
                    k++;
                } else {
                    resolve();
                    clearInterval(interval);
                }
            }, speed);
        })
    }
    
    function CopyArray(A: number[], iBegin: number, iEnd: number, B: number[]) {
        for (let k = iBegin; k < iEnd; k++) {
            B[k] = A[k];
        }
    }

    let sortedArr: number[] = [];
    await TopDownMergeSort(array, sortedArr, array.length);
    console.log('g')
}