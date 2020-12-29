import React from 'react';

import styles from './index.module.css';

import { IPost } from '@lib/interfaces';

const Index = (
  props: { post: IPost }
) => {
  return (
    <div className={styles.root}>
      {props.post.title}
    </div>
  );
};

export default Index;