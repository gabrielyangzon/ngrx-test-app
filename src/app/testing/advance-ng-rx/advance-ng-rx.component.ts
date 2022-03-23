import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Post } from './post.model';

import { Observable } from 'rxjs';

import * as PostActions  from './post.actions'

interface AppState {
  post : Post
}

@Component({
  selector: 'app-advance-ng-rx',
  templateUrl: './advance-ng-rx.component.html',
  styleUrls: ['./advance-ng-rx.component.css']
})
export class AdvanceNgRxComponent implements OnInit {

  post : Observable<Post> 
  text : string

  constructor(private store : Store<AppState>) { }

  ngOnInit(): void {
    this.post = this.store.select("post")
  }

  editText() {
   
    this.store.dispatch(PostActions.Edit({title : this.text}))
  }

  resetPost() {
    this.store.dispatch(PostActions.Reset())
  }

  upVote() {
    this.store.dispatch(PostActions.Upvote())
  }

  downVote(){
    this.store.dispatch(PostActions.Downvote())
  }



}
