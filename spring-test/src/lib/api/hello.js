import client from './client';

export const hello = () => client.get('/api/hello');
