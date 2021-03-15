export enum State {
    Empty = 0,
    Filled = 1,
}

export interface Cell {
    size: number;
    state: State;
    position: [x: number, y: number];
    onClick: (position: string[]) => void;
}