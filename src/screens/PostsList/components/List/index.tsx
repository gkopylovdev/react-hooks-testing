import React from 'react';

import { IPost } from '@lib/interfaces';

import Item from './Item';

const List = (
  props: { posts: Array<IPost> }
) => {
  return (
    <div className="root">
      {props.posts.map(post =>
        <Item
          post={post}
          key={post.id}
        />
      )}
    </div>
  );
};

export default List;