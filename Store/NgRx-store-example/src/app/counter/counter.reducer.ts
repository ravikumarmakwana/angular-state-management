import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset, setValue } from "./counter.actions";

const _counterReducer = createReducer(
    0,
    on(increment, (state) => state + 1),
    on(decrement, (state) => state - 1),
    on(reset, (state) => 0),
    on(setValue, (state, {count}) => count),
);

export function counterReducer(state: any, action: any){
    return _counterReducer(state, action);
}