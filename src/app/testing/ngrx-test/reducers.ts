import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import {
  ProductsPageActions,
  addUser,
  deleteUser,
  editUser,
  getAllUser,
  getAllUserSuccess,
} from './actions';
import { User } from './User';

export const initialState: User[] = [];

export const userReducer = createReducer(
  initialState,
  on(addUser, (state, props) => addToStateUser(state, props.user)),
  on(deleteUser, (state, props) => deleteToStateUser(state, props.id)),
  on(editUser, (state, props) => editToStateUser(state, props.user)),
  on(getAllUser, (state) => state),
  on(getAllUserSuccess, (state, props) => getAllUsersSucess(state, props))
);

export const ProductReducer = createReducer(
  {},
  on(ProductsPageActions.gabrielChanged, (state, query) => {
    console.log(query);
    return query;
  })
);
function addToStateUser(currentState: User[], newUser: User): User[] {
  let lastId =
    currentState.length === 0 ? 0 : currentState[currentState.length - 1].id;

  let userToAdd = { ...newUser, id: lastId + 1 };
  let result = [...currentState, userToAdd];
  console.log(result);
  return result;
}

function deleteToStateUser(currentState: User[], id: number) {
  let currentUsers = currentState;

  let userToDelete = currentUsers.find((user) => user.id === id);
  let result = currentUsers.filter((user) => user.id !== userToDelete?.id);

  console.log(result);

  return result;
}

function getAllUsersSucess(currentState: User[], props: any) {
  console.log(props.payload);

  let newState = [...props.payload];
  return newState;
}

function editToStateUser(currentState: User[], user: User) {
  let state = [...currentState];

  let index = state.findIndex((s) => s.id === user.id);
  let editedUser = { ...user, name: 'testg' };
  state[index] = editedUser;

  return state;
}

// Creating selectors
export const getUserState = createFeatureSelector<User[]>('user');

export const getUsers = createSelector(getUserState, (state: User[]) => state);
