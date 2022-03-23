import { 
    Action , 
    createReducer , 
    on 
} from "@ngrx/store";

import * as ActionTypes from '../simple-ng-rx/simple.actions'

export const initialState = "Hello world";

const _messageReducer = createReducer(
    initialState,
    on(ActionTypes.toEnglishAction, () => "Hello world"),
    on(ActionTypes.toSpanishAction, () => "Hola Mundo"),
    on(ActionTypes.toFrenchAction , () => "Bonjour lemonde")
) 


export function messageReducer(state : string = initialState , action: Action){
  
        return _messageReducer(state , action)
}

