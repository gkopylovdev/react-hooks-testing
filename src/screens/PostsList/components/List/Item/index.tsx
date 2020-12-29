import React from 'react';

import { IPost, IUser } from '@lib/interfaces';

import styles from './index.module.css';

interface IProps {
  post: IPost;
  user: IUser | null;
}

const Index = (
  props: IProps
) => {
  const { post, user } = props;

  return (
    <div className={styles.root}>
      <div className={styles.userRow}>
        <span className={styles.userName}>{ user?.name }</span>
        <span className={styles.userUsername}>@{ user?.username }</span>
      </div>

      <div className={styles.post}>
        <span className={styles.postTitle}>{ post.title }</span>

        <div className={styles.postBody}>{ post.body }</div>
      </div>
    </div>
  );
};

export default Index;