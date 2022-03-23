import { Action ,createAction } from "@ngrx/store";

export enum ActionTypes {
    TO_SPANISH = 'SPANISH',
    TO_FRENCH = 'FRENCH',
    TO_ENGLISH = 'ENGLISH'
}


export const toSpanishAction = createAction(ActionTypes.TO_SPANISH)
export const toFrenchAction = createAction(ActionTypes.TO_FRENCH)
export const toEnglishAction = createAction(ActionTypes.TO_ENGLISH)