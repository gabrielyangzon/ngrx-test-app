import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromAction from './actions';
import { User } from './User';

@Component({
  selector: 'app-ngrx-test',
  templateUrl: './ngrx-test.component.html',
  styleUrls: ['./ngrx-test.component.css'],
})
export class NgrxTestComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<{ user: User[] }>) {}

  ngOnInit(): void {}

  addUser() {
    let newUser = { id: 0, name: 'gabriel' } as User;
    this.store.dispatch(fromAction.addUser({ user: newUser }));
  }
}
