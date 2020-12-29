import React from 'react';
import { useParams } from 'react-router-dom';

import { SharedContext } from '@lib/sharedState';
import { IPost, IUser } from '@lib/interfaces';

import { IParams } from '@/screens/PostsList/Interfaces';

import Item from './Item';

import styles from './Index.module.css';

interface IProps {
  posts: Array<IPost>;
}

const List = (
  props: IProps
) => {
  const sharedContext = React.useContext(SharedContext);
  const { userId } = useParams<IParams>();
  const currentUser = sharedContext.users.list.find((user: IUser) => user.id === parseInt(userId)) || null;

  return (
    <div className={styles.root}>
      {props.posts.map(post =>
        <Item
          post={post}
          user={currentUser}
          key={post.id}
        />
      )}
    </div>
  );
};

export default List;