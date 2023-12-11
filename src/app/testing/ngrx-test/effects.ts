import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { DataService } from 'src/app/service/data.service';

import * as actions from '../ngrx-test/actions';

@Injectable()
export class DataEffects {
  constructor(private actions$: Actions, private dataService: DataService) {}

  loadAllArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.getAllUser),
      switchMap(() =>
        this.dataService.getUsers().pipe(
          map((data) => actions.getAllUserSuccess({ payload: data })),
          catchError(() => of({ type: 'error' }))
        )
      )
    )
  );
}
