import { State } from "../../interfaces/ICell";

export default async function sort(array: number[], setArray: (newArray: number[]) => void, stateArr: State[], setStateArr: (newStateArr: State[]) => void, speed: number) {
    async function BottomUpMergeSort(A: number[], B: number[], n: number) {
        for (let width = 1; width < n; width*=2) {
            for (let i = 0; i < n; i = i + 2 * width) {
                await BottomUpMerge(A, i, Math.min(i + width, n), Math.min(i + 2 * width, n), B);
            }
            await CopyArray(B, A, n);
        }
    }

    async function BottomUpMerge(A: number[], iLeft: number, iRight: number, iEnd: number, B: number[]) {
        let i = iLeft;
        let j = iRight;

        return new Promise<void>(resolve => {
            let k = iLeft;
            const interval = setInterval(() => {
                if (k < iEnd) {
                    if (i < iRight && (j >= iEnd || A[i] <= A[j])) {
                        B[k] = A[i];
                        stateArr[i] = State.Sorted;
                        setStateArr([...stateArr]);
                        i++;
                    } else {
                        B[k] = A[j];
                        stateArr[i] = State.Sorted;
                        setStateArr([...stateArr]);
                        j++;
                    }
                    k++;
                } else {
                    resolve();
                    clearInterval(interval);
                }
            }, speed);
        });
    }

    async function CopyArray(B: number[], A: number[], n: number) {
        for (let i = 0; i < n; i++) {
            A[i] = B[i];
        }
    }

    let sortedArr: number[] = [];
    console.log(array, sortedArr);
    await BottomUpMergeSort(array, sortedArr, array.length);
    setArray([...array]);
}