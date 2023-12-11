import { createAction, props } from '@ngrx/store';
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
