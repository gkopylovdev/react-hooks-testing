import { request } from '@lib/api/core';

export async function loadUsers() {
  const data = await request('GET', '/users');

  return data;
}
