import { State } from "../../interfaces/ICell";

export default async function sort(array: number[], setArray: (newArray: number[]) => void, stateArr: State[], setStateArr: (newStateArr: State[]) => void, speed: number) {

    let i: number;
    let j: number;

    const step = () => {
        return new Promise<void>(resolve => {
            const stepInterval = setInterval(() => {
                if (array[j - 1] > array[j]) {
                    [array[j - 1], array[j]] = [array[j], array[j - 1]];
                    setArray([...array]);
                }
                if (j >= array.length) {
                    clearInterval(stepInterval);
                    resolve();
                }
                j++;
            }, speed);
        });
    }

    for (i = array.length - 1; i >= 0; i--) {
        j = 1;
        await step();
        stateArr[i] = State.Sorted;
        setStateArr([...stateArr]);

    }

}