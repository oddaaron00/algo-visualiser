import { State } from "../../interfaces/ICell";

export default async function sort(array: number[], setArray: (newArray: number[]) => void, stateArr: State[], setStateArr: (newStateArr: State[]) => void, speed: number) {

    let i: number;
    let j: number;

    const step = () => {
        return new Promise<void>(resolve => {
            j = i;
            const stepInterval = setInterval(() => {
                if (j > 0 && array[j - 1] > array[j]) {
                    [array[j], array[j - 1]] = [array[j - 1], array[j]];
                    [stateArr[j], stateArr[j - 1]] = [stateArr[j - 1], stateArr[j]];
                    j--;
                    setArray([...array]);
                    setStateArr([...stateArr]);
                } else {
                    setArray([...array]);
                    resolve();
                    clearInterval(stepInterval);
                }
            }, speed)
        });
    }
    
    for (i = 0; i < array.length; i++) {
        j = i;
        stateArr[j] = State.Current;
        setStateArr([...stateArr]);
        await step();
        stateArr[j] = State.Sorted;
        setStateArr([...stateArr]);
    }

}