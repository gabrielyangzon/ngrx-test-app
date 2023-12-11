import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../User';
import * as fromAction from '../actions';
import * as fromReducer from '../reducers';

@Component({
  selector: 'app-ngrx-test-child',
  templateUrl: './ngrx-test-child.component.html',
  styleUrls: ['./ngrx-test-child.component.css'],
})
export class NgrxTestChildComponent implements OnInit {
  users$: Observable<User[]>;
  constructor(private store: Store<{ user: User[] }>) {}

  ngOnInit(): void {
    this.store.dispatch(fromAction.getAllUser());
    this.users$ = this.store.pipe(select((state) => state.user));

    //console.log(this.users$);
  }

  delete(id: number) {
    this.store.dispatch(fromAction.deleteUser({ id: id }));
  }
}
