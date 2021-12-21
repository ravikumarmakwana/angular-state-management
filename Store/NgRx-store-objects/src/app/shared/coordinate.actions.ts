import { createAction, props } from "@ngrx/store";
import { Coordinate } from "./coordinate.model";

export const incrementXCoordinate = createAction('[Coordinate] increment X coordinate');
export const incrementYCoordinate = createAction('[Coordinate] increment Y coordinate');
export const reduceXCoordinate = createAction('[Coordinate] reduce X coordinate');
export const reduceYCoordinate = createAction('[Coordinate] reduce Y coordinate');
export const resetCoordinate = createAction('[Coordinate] reset coordinate');
export const setXYCoordinate = createAction(
    '[Coordinate] set X and Y coordinate', props<{coordinate : Coordinate}>());