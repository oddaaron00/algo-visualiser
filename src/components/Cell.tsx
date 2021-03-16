import * as i from '../interfaces/ICell';
import '../styles/Cell.css';

export default function Cell({ size, state, position, onClick }: i.Cell) {
    let style;

    switch (state) {
        case i.State.Empty: {
            style = { 'backgroundColor': 'white' };
            break;
        }
        case i.State.Filled: {
            style = { 'backgroundColor': '#0074D9' };
            break;
        }
        case i.State.Current: {
            style = { 'backgroundColor': '#FF4136' };
            break;
        }
        case i.State.Sorted: {
            style = { 'backgroundColor': '#FFDC00' };
            break;
        }
        default: {
            style = {  };
        }
    }

    return (
        <td id={`${position[0]}-${position[1]}`} style={{width: size, height: size, ...style}} onClick={e => onClick((e.target as Element).id.split('-'))}></td>
    )
}