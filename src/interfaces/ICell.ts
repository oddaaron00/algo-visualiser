export enum State {
    Empty = 0,
    Filled = 1,
    Current = 2,
    Sorted = 3,
    CurrentMin = 4,
}

export interface Cell {
    size: number;
    state: State;
    position: [x: number, y: number];
    onClick: (position: string[]) => void;
}