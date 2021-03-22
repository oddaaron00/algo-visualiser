import { State } from "./ICell";

export interface Grid {
    cellSize: number;
    gridHeight: number;
    gridWidth: number;
    gridArr: number[];
    setGridArr: (newArray: number[]) => void;
    stateArr: State[];
    setStateArr: (newState: State[]) => void;
    isRunning: boolean;
}