import { jsonApiInstance } from '@/shared/api/instances';
import { User } from './types';
import { GenericAbortSignal } from 'axios';

export const routes = {
  users: '/users',
};

export const fetchUsers = (signal: GenericAbortSignal) => {
  return jsonApiInstance.get<User[]>(routes.users, { signal });
};
