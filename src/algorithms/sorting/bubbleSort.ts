export function bubbleSort(array: number[], setGridArr: (newGridArr: number[]) => void) {
    var n: number = array.length;
    var newn: number;
    do {
        pass();
    } while (n > 1);
}

function pass() {
    newn = 0;
    for (let i = 1; i < n; i++) {
        step();
    }
    n = newn;
}

function step() {
    if (array[i - 1] > array[i]) {
        [array[i - 1], array[i]] = [array[i], array[i - 1]];
        setGridArr([...array]);
        newn = i;
    }
}