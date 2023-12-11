import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

interface AppState {
  message: string;
}

interface AppState2 {}

@Component({
  selector: 'app-simple-ng-rx',
  templateUrl: './simple-ng-rx.component.html',
})
export class SimpleNgRxComponent implements OnInit {
  message: Observable<string> = of('');

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.message = this.store.select('message');
  }

  toSpanish() {
    this.store.dispatch({ type: 'SPANISH' });
  }

  toFrench() {
    this.store.dispatch({ type: 'FRENCH' });
  }

  toEnglish() {
    this.store.dispatch({ type: 'ENGLISH' });
  }
}
