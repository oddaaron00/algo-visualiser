import { State } from "../../interfaces/ICell";

export default function sort(array: number[], setArray: (newArray: number[]) => void, stateArr: State[], setStateArr: (newStateArr: State[]) => void) {
    let i = 0;
    let aLength = array.length;

    const interval = setInterval(() => {
        pass(i);
        i++;
        if (i >= aLength) {
            clearInterval(interval);
            console.log("STOP")
        }
        console.log(i);
    }, 100);


    const pass = (i: number) => {
        let jMin = i;
        for (let j = i + 1; j < aLength; j++) {
            if (array[j] < array[jMin]) {
                jMin = j;
            }
        }

        if (jMin !== i) {
            [array[i], array[jMin]] = [array[jMin], array[i]];
            setArray([...array]);
        }
        stateArr[i] = State.Sorted;
        setStateArr([...stateArr]);
    }
}