import { createAction , props } from "@ngrx/store";


export enum ActionTypes {
  LOAD_USERS_REQUEST = '[Users] Load Users Request',
  LOAD_USERS_FAILURE = '[Users] Load Users Failure',
  LOAD_USERS_SUCCESS = '[Users] Load Users Success',  
}


export const loadUsersRequestAction = createAction(ActionTypes.LOAD_USERS_REQUEST ,)
export const loadUsersFailureAction = createAction(ActionTypes.LOAD_USERS_FAILURE , props<{ errorMsg : string }>())
export const loadUsersSuccessAction = createAction(ActionTypes.LOAD_USERS_SUCCESS , props<{ users : any[] }>())

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');