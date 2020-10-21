import client from './client';

export const getUser = () =>
  client.get('https://jsonplaceholder.typicode.com/users/');
