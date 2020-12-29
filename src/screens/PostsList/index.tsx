import React from 'react';
import { useParams } from 'react-router-dom';

import { IPost } from '@lib/interfaces';
import Loader from '@components/Loader';

import Toolbar from './components/Toolbar';
import List from './components/List';

import { IParams } from './Interfaces';
import { Reducer, defaultState, actions } from './state';
import {
  loadPosts,
  loadPostsById
} from './dataLayer';

const Index = () => {
  const [state, dispatch] = React.useReducer(Reducer, defaultState);
  const { userId } = useParams<IParams>();

  React.useEffect(() => {
    dispatch(actions.startLoadingPosts());

    (async function loadData() {
      let posts: Array<IPost> = [];

      if (userId) {
        posts = await loadPostsById(userId);
      } else {
        posts = await loadPosts();
      }

      dispatch(actions.loadingPostsDone(posts));
    })();
  }, [userId]);

  return (
      <div>
        {
          state.postsLoading &&
            <Loader hasOverlay />
        }

        {
          !state.postsLoading &&
            <>
              <Toolbar />

              <List posts={state.posts} />
            </>
        }
      </div>
  );
};

export default Index;