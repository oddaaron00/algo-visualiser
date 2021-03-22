import { State } from "../../interfaces/ICell";

export default async function sort(array: number[], setArray: (newArray: number[]) => void, stateArr: State[], setStateArr: (newStateArr: State[]) => void, speed: number) {
    const iParent = (i: number) => Math.floor((i - 1) / 2);
    const iLeftChild = (i: number) => 2 * i + 1;
    const iRightChild = (i: number) => 2 * i + 2;

    function heapsort(a: number[]) {
        heapify(a);

        let end = a.length - 1;
        while (end > 0) {
            [a[end], a[0]] = [a[0], a[end]];
            end--;
            siftDown(a, 0, end);
        }
    }

    function heapify(a: number[]) {
        let start = iParent(a.length - 1);

        while (start >= 0) {
            siftDown(a, start, a.length - 1);
            start--;
        }
    }

    function siftDown(a: number[], start: number, end: number) {
        let root = start;

        while (iLeftChild(root) <= end) {
            let child = iLeftChild(root);
            let swap = root;

            if (a[swap] < a[child]) {
                swap = child;
            }
            if (child + 1 <= end && a[swap] < a[child + 1]) {
                swap = child + 1;
            }
            if (swap === root) {
                return;
            }
            else {
                [a[root], a[swap]] = [a[swap], a[root]];
                root = swap;
            }
        }
    }
}