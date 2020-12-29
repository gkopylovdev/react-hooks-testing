import { IPost } from '@lib/interfaces';

const FETCH_POSTS_START: string = 'FETCH_POSTS_START';
const FETCH_POSTS_DONE: string = 'FETCH_POSTS_DONE';


export interface IFetchStartAction {
  type: typeof FETCH_POSTS_START;
  payload?: any;
};

export interface IFetchPostsDoneAction {
  type: typeof FETCH_POSTS_DONE;
  payload: {
    posts: Array<IPost>;
  };
};
export type PostsActions = IFetchStartAction | IFetchPostsDoneAction;
export const TYPES = {
  FETCH_POSTS_START,
  FETCH_POSTS_DONE
};