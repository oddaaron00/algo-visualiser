import { State } from "../../interfaces/ICell";

export default async function sort(array: number[], setArray: (newArray: number[]) => void, stateArr: State[], setStateArr: (newStateArr: State[]) => void) {

    const step = (i: number) => {
        let jMin = i;
        stateArr[jMin] = State.CurrentMin;
        setStateArr([...stateArr]);
        return new Promise((resolve: (value: [jMin: number, i: number]) => any) => {
            j = i;
            const stepInterval = setInterval(() => {
                if (j !== jMin) {
                    stateArr[j] = State.Filled;
                    setStateArr([...stateArr]);
                }
                j++;
                stateArr[j] = State.Current;
                setStateArr([...stateArr]);
                
                if (array[j] < array[jMin]) {
                    stateArr[jMin] = State.Filled;
                    setStateArr([...stateArr]);
                    jMin = j;
                    stateArr[jMin] = State.CurrentMin;
                    setStateArr([...stateArr]);
                }

                if (j >= aLength) {
                    resolve([jMin, i]);
                    clearInterval(stepInterval);
                }
            }, 250)
        });
    }


    let i: number;
    let j: number;
    let aLength = array.length;

    for (i = 0; i < aLength - 1; i++) {
        await step(i).then((vals: [jMin: number, i: number]) => {
            let [jMin, i] = vals;
            console.log(i);
            if (jMin !== i) {
                [array[i], array[jMin]] = [array[jMin], array[i]];
                stateArr[jMin] = State.Filled;
            } else {
                console.log(i, jMin);
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