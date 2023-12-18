import {
  createAction,
  createActionGroup,
  emptyProps,
  props,
} from '@ngrx/store';
import { User } from './User';

export const addUser = createAction('[User] Add user', props<{ user: User }>());

export const deleteUser = createAction(
  '[User] Delete user',
  props<{ id: number }>()
);

export const editUser = createAction(
  '[User] Edit user',
  props<{ user: User }>()
);

export const getAllUserSuccess = createAction(
  '[User] success Get all user',
  props<{ payload: User[] }>()
);

export const getAllUser = createAction('[User] Get all user');

export const ProductsPageActions = createActionGroup({
  source: 'Products Page',
  events: {
    // defining an event without payload using the `emptyProps` function
    Opened: emptyProps(),

    // defining an event with payload using the `props` function
    'Pagination Changed': props<{ page: number; offset: number }>(),

    // defining an event with payload using the props factory
    'Query Changed': (query: string) => ({ query }),
    'Gabriel Changed': (query: string) => ({ query }),
  },
});
