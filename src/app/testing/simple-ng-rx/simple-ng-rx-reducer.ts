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
  //  console.log(state,action)
        return _messageReducer(state , action)
}

// export function simpleReducer(state : string = "Hello world" , action :Action){

//     switch(action.type){
//         case "SPANISH":
//             return state = 'Hola Mundo'
//         case "FRENCH" :
//             return state = 'Bonjour lemonde';
//         case "ENGLISH":
//             return state = 'Hello world';
//         default:
//             return state;

//     }
// }