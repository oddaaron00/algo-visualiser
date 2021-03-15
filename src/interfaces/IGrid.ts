export interface Grid {
    cellSize: number;
    gridHeight: number;
    gridWidth: number;
    gridArr: number[];
    setGridArr: (newArray: number[]) => void;
}