import { IPost } from '@lib/interfaces';

import {
  IFetchStartAction,
  IFetchPostsDoneAction,
  TYPES
} from './types';

export const startLoadingPosts = (): IFetchStartAction => ({
  type: TYPES.FETCH_POSTS_START
});

export const loadingPostsDone = (posts: Array<IPost>): IFetchPostsDoneAction => ({
  type: TYPES.FETCH_POSTS_DONE,
  payload: { posts },
});
