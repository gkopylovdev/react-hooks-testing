import { ISharedState } from '@lib/interfaces';
import { ActionsTypes, TYPES } from './types';

export const defaultSharedState: ISharedState = {
  users: {
    loading: false,
    list: [],
  },
};

export function Reducer(state: ISharedState, action: ActionsTypes) {
  switch(action.type) {
    case TYPES.FETCH_USERS_START:
      return Object.assign({}, state, { users: { loading: true, list: state.users.list }});
    case TYPES.FETCH_USERS_DONE:
      return Object.assign({}, state, { users: { loading: false, list: action.payload.users }});
    default:
      throw new Error('Unexpected error at SharedState');
  }
}