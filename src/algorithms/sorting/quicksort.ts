import { State } from "../../interfaces/ICell";

export default async function sort(array: number[], setArray: (newArray: number[]) => void, stateArr: State[], setStateArr: (newStateArr: State[]) => void, speed: number) {
    async function quicksort(lo: number, hi: number) {
        if (lo < hi) {
            let p = await partition(lo, hi);
            await quicksort(lo, p - 1);
            await quicksort(p + 1, hi);
        }
    }

    async function partition(lo: number, hi: number) {
        let pivot = array[hi];
        let i = lo;
        let j = lo;
        await new Promise<void>(resolve => {
            const stepInterval = setInterval(() => {
                if (j < hi + 1) {
                    if (array[j] < pivot) {
                        [array[i], array[j]] = [array[j], array[i]];
                        setArray([...array]);
                        i++;
                    }
                    j++;
                } else {
                    resolve();
                    clearInterval(stepInterval);
                }
            }, speed)
        });
        console.log(pivot, i, lo, hi);        
        [array[i], array[hi]] = [array[hi], array[i]];
        setArray([...array]);
        return i;
    }

    await quicksort(0, array.length - 1);
}