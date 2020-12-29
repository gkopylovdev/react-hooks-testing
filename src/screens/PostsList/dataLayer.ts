import { IPost } from '@lib/interfaces';
import { request } from '@lib/api/core';

export async function loadPosts(): Promise<Array<IPost>> {
  const data = await request('GET', '/posts');

  return data;
}

export async function loadPostsById(userId: string): Promise<Array<IPost>> {
  const data = await request('GET', `/users/${userId}/posts`);

  return data;
}
