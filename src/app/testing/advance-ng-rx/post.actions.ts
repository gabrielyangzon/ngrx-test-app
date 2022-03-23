import { Action ,createAction , props} from "@ngrx/store";


 enum ActionTypes {
      EDIT_TEXT ='[Post] Edit',
      UPVOTE ='[Post] Upvote',
      DOWNVOTE ='[Post] Downvote',
      RESET = '[Post] Reset'
}


export const Edit = createAction(ActionTypes.EDIT_TEXT, props<{ title : string }>() );
export const Upvote = createAction(ActionTypes.UPVOTE);
export const Downvote = createAction(ActionTypes.DOWNVOTE);
export const Reset = createAction(ActionTypes.RESET);


// export class EditText implements Action {

//     readonly type = EDIT_TEXT

//     constructor(public payload : string ) {}
// }


// export class Upvote implements Action {
//     readonly type = UPVOTE
// }

// export class Downvote implements Action {
//     readonly type = DOWNVOTE
// }

// export class Reset implements Action {
//     readonly type = RESET
// }

// export type All
//   = Upvote
//   | Downvote
//   | Reset
//   | EditText;