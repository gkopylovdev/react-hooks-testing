import { IUser } from '@lib/interfaces';

const FETCH_USERS_START: string = 'FETCH_USERS_START';
const FETCH_USERS_DONE: string = 'FETCH_USERS_DONE';

export interface IFetchUsersStartAction {
  type: typeof FETCH_USERS_START;
  payload?: any;
}

export interface IFetchUsersDoneAction {
  type: typeof FETCH_USERS_DONE;
  payload: {
    users: Array<IUser>;
  };
}

export const TYPES = {
  FETCH_USERS_START,
  FETCH_USERS_DONE,
};

export type ActionsTypes = IFetchUsersStartAction | IFetchUsersDoneAction;