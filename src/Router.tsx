import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { SharedContext } from '@lib/sharedState';

import UsersList from '@modules/UsersList';

import PostsList from './screens/PostsList';

const AppRouter = () => {
  const sharedState = React.useContext(SharedContext);

  return (
    <Router>
      <UsersList loading={sharedState.users.loading} users={sharedState.users.list} />
      <Switch>
        <Route path="/users/:userId/posts" component={PostsList} />
        <Route path="/users/:userId/todos" component={PostsList} />
        <Route path="/users/:userId/albums" component={PostsList} />
      </Switch>
    </Router>  
  );
};

export default AppRouter;