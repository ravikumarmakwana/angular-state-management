import { createReducer, on } from "@ngrx/store";
import { 
    incrementXCoordinate, 
    incrementYCoordinate, 
    reduceXCoordinate, 
    reduceYCoordinate,
    resetCoordinate, 
    setXYCoordinate 
} from "./coordinate.actions";
import { Coordinate } from "./coordinate.model";

const initialState: Coordinate = {x: 0, y: 0};
const _coordinateReducer = createReducer(
    initialState,
    on(incrementXCoordinate, coordinates => ({...coordinates, x: coordinates.x + 1})),
    on(incrementYCoordinate, coordinates => ({...coordinates, y: coordinates.y + 1})),
    on(reduceXCoordinate, coordinates => ({...coordinates, x: coordinates.x - 1})),
    on(reduceYCoordinate, coordinates => ({...coordinates, y: coordinates.y - 1})),
    on(resetCoordinate, coordinates => ({x: 0, y: 0})),
    on(setXYCoordinate, (coordinates, {coordinate}: any) => ({x: coordinate.x, y: coordinate.y}))
);

export function coordinateReducer(state: any, action: any){
    return _coordinateReducer(state, action);
}