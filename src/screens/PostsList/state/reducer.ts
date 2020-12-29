import { PostsActions, TYPES } from './types';

import { IState } from '../Interfaces';

export const defaultState: IState = {
  posts: [],
  postsLoading: false,
};

export function Reducer(state: IState, action: PostsActions) {
  switch (action.type) {
    case TYPES.FETCH_POSTS_START:
      return {
        ...state,
        postsLoading: true,
      };
      
    case TYPES.FETCH_POSTS_DONE: 
      return {
        ...state,
        postsLoading: false,
        posts: action.payload.posts,
      };

    default: 
      throw new Error('Unkown action type at ');
  }
}