import React from 'react';

import Toolbar from './components/Toolbar';
import List from './components/List';

import { Reducer, defaultState, actions } from './state';
import {
  loadPosts
} from './dataLayer';

const Index = () => {
  const [state, dispatch] = React.useReducer(Reducer, defaultState);

  React.useEffect(() => {
    dispatch(actions.startLoadingPosts());

    (async function loadData() {
      const posts = await loadPosts();

      dispatch(actions.loadingPostsDone(posts));
    })();
  }, []);

  return (
      <div>
        <Toolbar />
        <List posts={state.posts} />
      </div>
  );
};

export default Index;