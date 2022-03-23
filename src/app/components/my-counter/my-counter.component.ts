import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable ,of } from 'rxjs';

import { increment, decrement, reset } from '../../actions/counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {

  count : Observable<number> = of(0)

  constructor(private store : Store<{count : number}>) {
      this.count = store.select('count')
  }

  ngOnInit(): void {
  }

   increment() {
    // TODO: Dispatch an increment action
    this.store.dispatch(increment());
  }
 
  decrement() {
    // TODO: Dispatch a decrement action
    this.store.dispatch(decrement());
  }
 
  reset() {
    // TODO: Dispatch a reset action
    this.store.dispatch(reset());
  }

}
