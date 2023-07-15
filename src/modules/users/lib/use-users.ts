import { useEffect, useState } from 'react';

import { fetchUsers } from '../api/api';
import { User } from '../api/types';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      fetchUsers()
        .then(({ data }) => setUsers(data))
        .catch(() => setError('Error fetching users'))
        .finally(() => setLoading(false));
    }, 800);
  }, []);

  return { users, isLoading, error };
};
