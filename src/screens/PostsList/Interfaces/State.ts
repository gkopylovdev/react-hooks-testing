import { IPost } from '@lib/interfaces';

export interface IState {
  posts: Array<IPost>;
  postsLoading: boolean,
};