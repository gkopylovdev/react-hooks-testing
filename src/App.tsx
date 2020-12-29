import React from 'react';

import {
  SharedContext,
  Reducer,
  actions,
  defaultSharedState
} from '@lib/sharedState';

import { loadUsers } from './dataLayer';

import styles from './App.module.css';

import AppRouter from './Router';

const App = () => {
  const [state, dispatch] = React.useReducer(Reducer, defaultSharedState);

  React.useEffect(() => {
    dispatch(actions.startLoadingUsers());

    (async () => {
      const users = await loadUsers();

      dispatch(actions.loadingUsersDone(users));
    })();
  }, []);

  return (
    <SharedContext.Provider value={state}>
      <div className={styles.appRoot}>
        <AppRouter />
      </div>
    </SharedContext.Provider>
  );
}

export default App;
