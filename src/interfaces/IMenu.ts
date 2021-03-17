export interface Menu {
    sortingAlgs: string[];
    currentAlg: string;
    setAlg: (newAlg: string) => void;
    resetGrid: () => void;
    randomiseData: () => void;
    visualise: () => void;
    speed: number;
    setSpeed: (newSpeed: number) => void;
}