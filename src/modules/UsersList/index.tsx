import React from 'react';
import Loader from '@components/Loader';

import { IUser } from '@lib/interfaces';

import User from './components/User';

import styles from './index.module.css';

const UsersList = (
  props: { loading: boolean, users: Array<IUser> }
) => {
  const { loading, users } = props;

  const renderBody = () => {
    if (loading) {
      return <Loader hasOverlay />
    }

    return users.map((user, idx) =>
      <div key={`${user.id}_user`}>
        <User user={user}  />
        { idx !== users.length - 1 && <hr /> }
      </div>
    );
  };

  return (
    <div className={styles.root}>
      <h3 className={styles.title}>Users list</h3>

      <div className={styles.body}>
        { renderBody() }
      </div>
    </div>
  );
};

export default UsersList;