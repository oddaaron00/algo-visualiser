import { State } from "../../interfaces/ICell";

export default async function sort(array: number[], setArray: (newArray: number[]) => void, stateArr: State[], setStateArr: (newStateArr: State[]) => void, speed: number) {

    let i: number;
    let j: number;
    let n: number = array.length;

    const step = () => {
        return new Promise<void>(resolve => {
            const stepInterval = setInterval(() => {
                if (j < n) {
                    stateArr[j] = State.Current;
                }
                stateArr[j - 1] = State.Current;
                stateArr[j - 2] = State.Filled;
                setStateArr([...stateArr])
                if (array[j - 1] > array[j]) {
                    [array[j - 1], array[j]] = [array[j], array[j - 1]];
                    setArray([...array]);
                }
                if (j >= n) {
                    resolve();
                    clearInterval(stepInterval);
                }
                j++;
            }, speed);
        });
    }

    for (i = n - 1; i >= 0; i--) {
        j = 1;
        await step();
        stateArr[i] = State.Sorted;
        //stateArr[i + 1] = State.Sorted;
        setStateArr([...stateArr]);
        n--;

    }

}