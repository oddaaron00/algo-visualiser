export function bubbleSort(array: number[], setGridArr: (newGridArr: number[]) => void) {
    var state = {
        array: array,
        setGridArr: setGridArr,
        n: array.length,
        newn: 0
    }
    do {
        state.newn = 0;
        for (let i = 1; i < state.n; i++) {
            pass(state);
        }
        state.n = state.newn;
    } while (state.n > 1);
}

function pass(state: { array: number[], setGridArr: (newGridArr: number[]) => void, n: number, newn: number }) {
    console.log("PASS");
}

function step(state: { array: number[], setGridArr: (newGridArr: number[]) => void, n: number, newn: number, i: number }) {
    if (state.array[state.i - 1] > state.array[state.i]) {
        [state.array[state.i - 1], state.array[state.i]] = [state.array[state.i], state.array[state.i - 1]];
        state.setGridArr([...state.array]);
        state.newn = state.i;
    }
}