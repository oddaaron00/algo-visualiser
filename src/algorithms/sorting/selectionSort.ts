import { State } from "../../interfaces/ICell";

async function sortPrev(array: number[], setArray: (newArray: number[]) => void, stateArr: State[], setStateArr: (newStateArr: State[]) => void) {
    const step = (jMin: number, j: number) => {
        console.log(jMin, j)
        if (array[j] < array[jMin]) {
            jMin = j;
        }
    }

    const pass = (i: number, j: number) => {
        console.log('j', j)
        let jMin = i;
        //for (j = i + 1; j < aLength; j++) {
        //    step(jMin, j);
        //}
        return new Promise((resolve: (value: [jMin: number, i: number]) => any) => {
            console.log(i, j)
            const stepInterval = setInterval(() => {
                if (j !== jMin) {
                    stateArr[j] = State.Filled;
                    setStateArr([...stateArr]);
                } else if (j === i) {
                    console.log("a")
                    stateArr[j] = State.CurrentMin;
                    setStateArr([...stateArr]);
                }
                j++;
                stateArr[j] = State.Current;
                setStateArr([...stateArr]);
                if (array[j] < array[jMin]) {
                    console.log('b')
                    stateArr[jMin] = State.Filled;
                    setStateArr([...stateArr]);
                    jMin = j;
                    stateArr[jMin] = State.CurrentMin;
                    setStateArr([...stateArr]);
                }

                if (j > aLength) {
                    stateArr[jMin] = State.Filled;
                    setStateArr([...stateArr]);
                    resolve([jMin, i]);
                    clearInterval(stepInterval);
                }
            }, 200)
        });
    }


    let i: number;
    let j: number;
    let aLength = array.length;

    for (i = 0; i < aLength - 1; i++) {
        j = i;
        await pass(i, j).then((vals: [jMin: number, i: number]) => {
            let [jMin, i] = vals;
            if (jMin !== i) {
                [array[i], array[jMin]] = [array[jMin], array[i]];
            }
            stateArr[i] = State.Sorted;
            setStateArr([...stateArr]);
            setArray([...array]);
            console.log('async')
        })
            //if (jMin !== i) {
            //    [array[i], array[jMin]] = [array[jMin], array[i]];
            //}
            //stateArr[i] = State.Sorted;
            //setStateArr([...stateArr]);
            //setArray([...array]);
    }
    stateArr[aLength - 1] = State.Sorted;
    setStateArr([...stateArr]);


}

export default async function sort(array: number[], setArray: (newArray: number[]) => void, stateArr: State[], setStateArr: (newStateArr: State[]) => void) {

    const step = (i: number) => {
        let jMin = i;
        return new Promise((resolve: (value: [jMin: number, i: number]) => any) => {
            j = i + 1;
            const stepInterval = setInterval(() => {
                if (array[j] < array[jMin]) {
                    jMin = j;
                }

                if (j > aLength) {
                    resolve([jMin, i]);
                    clearInterval(stepInterval);
                }
                j++;
            }, 10)
        });
    }


    let i: number;
    let j: number;
    let aLength = array.length;

    for (i = 0; i < aLength - 1; i++) {
        await step(i).then((vals: [jMin: number, i: number]) => {
            let [jMin, i] = vals;
            if (jMin !== i) {
                [array[i], array[jMin]] = [array[jMin], array[i]];
            }
            stateArr[i] = State.Sorted;
            setStateArr([...stateArr]);
            setArray([...array]);
        })
            //if (jMin !== i) {
            //    [array[i], array[jMin]] = [array[jMin], array[i]];
            //}
            //stateArr[i] = State.Sorted;
            //setStateArr([...stateArr]);
            //setArray([...array]);
    }
    stateArr[aLength - 1] = State.Sorted;
    setStateArr([...stateArr]);


}