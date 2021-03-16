import '../styles/Grid.css';
import * as i from '../interfaces/IGrid';
import { State } from '../interfaces/ICell';
import Cell from './Cell';

export default function Grid({ cellSize, gridHeight, gridWidth, gridArr, setGridArr, stateArr, setStateArr }: i.Grid) {

    const onCellClick = (position: string[]) => {
        let a = [...gridArr];
        let b = [...stateArr];
        console.log(position);
        b[Number(position[0])] = State.Filled;
        a[Number(position[0])] = Number(position[1]) + 1;

        setStateArr(b);
        setGridArr(a);
    }

    const resetColumn = (columnId: string) => {
        let a = [...gridArr];
        let b = [...stateArr];
        a[Number(columnId)] = 0;
        b[Number(columnId)] = State.Empty;
        setStateArr(b);
        setGridArr(a);
    }

    const renderColumn = (columnHeight: number, columnIndex: number) => {
        let column = [];
        for (let i = 0; i < Math.floor(gridHeight / cellSize); i++) {
            if (i < columnHeight) {
                column.push(<Cell key={i} size={cellSize} state={stateArr[columnIndex]} position={[columnIndex, i]} onClick={onCellClick}/>);
            } else {
                column.push(<Cell key={i} size={cellSize} state={State.Empty} position={[columnIndex, i]} onClick={onCellClick}/>);
            }
        }
        return <tr key={`r${columnIndex}`} id={String(columnIndex)} onDoubleClick={e => resetColumn((e.target as Element).id.split('-')[0])}>{column}</tr>
    }

    return (
        <main id='grid'>
            <table id='gridTable'>
                <tbody>
                    {gridArr.map((column, i) => renderColumn(column, i))}
                </tbody>
            </table>
        </main>
    )
}