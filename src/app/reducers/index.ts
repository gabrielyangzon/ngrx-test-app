import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
  

} from '@ngrx/store';


import { increment , decrement , reset} from '../actions/counter.actions'

import {ActionTypes} from '../actions/user.actions'

export const initialStateNum : number = 0

export interface State {

}


export interface UserState {
  selectedUser: any,
  users: any[],  
  isLoading?: boolean; 
  error?: any;
}

export const initialState: UserState = 
{
    selectedUser: null,
    users: [],  
    isLoading: false,
    error: null
};



const _counterReducer = createReducer(
  initialStateNum ,
  on(increment, (state) => state + 1),
  on(decrement, (state => state -1)),
  on(reset , (state) => 0)

  )

  export function counterReducer(state : number | undefined ,action : Action ) {
     return _counterReducer(state,action)
  }
