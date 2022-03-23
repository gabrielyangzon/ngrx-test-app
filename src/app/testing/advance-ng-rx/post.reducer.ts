
import { createReducer, on , Action } from '@ngrx/store';

import * as PostActions from './post.actions'
import { Post } from "./post.model";


const initialState : Post = {
    title :"default" ,
    likes: 0
}

const newState = (state : Post, newData : any) => {
    return Object.assign({} ,state , newData)
}


const _postReducer = createReducer(
    initialState,
    on(PostActions.Edit,     (state : Post , { title } ) => newState(state  ,   { title: title })),
    on(PostActions.Upvote,   (state : Post ) =>  newState(state , { likes : state.likes + 1}) ),
    on(PostActions.Downvote, (state : Post ) =>  newState(state , { likes : state.likes - 1}) ),
    on(PostActions.Reset,    () =>  initialState ),
)

export function postReducer(state : Post =initialState , action : Action){
    console.log(state, action)
    return _postReducer(state,action)
}




// export function postReducer(state : Post  = defaultState, action : Action)
// {

//     console.log(action.type,state)

//     switch(action.type){

//         case PostActions.EDIT_TEXT:
//             return newState(state , { text : action.payload });
        
//         case PostActions.UPVOTE:
//             return newState(state , {likes : state.likes +1})

//         case PostActions.DOWNVOTE:
//             return newState(state , {likes : state.likes -1})

//         case PostActions.RESET:
//             return defaultState

//         default:
//             return state;
//     }


// }