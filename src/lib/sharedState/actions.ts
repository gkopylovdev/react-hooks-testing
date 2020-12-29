import { IFetchUsersStartAction, IFetchUsersDoneAction, TYPES } from './types';
import { IUser } from '@lib/interfaces';

export const startLoadingUsers = (): IFetchUsersStartAction => ({
  type: TYPES.FETCH_USERS_START,
});

export const loadingUsersDone = (users: Array<IUser>): IFetchUsersDoneAction => ({
  type: TYPES.FETCH_USERS_DONE,
  payload: {
    users,
  },
});
