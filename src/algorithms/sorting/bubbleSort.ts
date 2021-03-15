export function bubbleSort(array: number[], setGridArr: (newGridArr: number[]) => void) {
    let n: number = array.length;
    let newn: number;
    do {
        newn = 0;
        for (let i = 1; i < n; i++) {
            if (array[i - 1] > array[i]) {
                [array[i - 1], array[i]] = [array[i], array[i - 1]];
                setGridArr([...array]);
                newn = i;
            }
        }
        n = newn;
    } while (n > 1);
}

function pass() {

}

function step() {
    
}