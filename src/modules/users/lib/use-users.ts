import { useEffect, useState } from 'react';

import { fetchUsers } from '../api/api';
import { User } from '../api/types';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const abortController = new AbortController();

    setLoading(true);

    setTimeout(() => {
      fetchUsers(abortController.signal)
        .then(({ data }) => setUsers(data))
        .catch((error) => {
          const isNotCancelled = error.name !== 'CanceledError';

          if (isNotCancelled) setError('Error fetching users');
        })
        .finally(() => setLoading(false));
    }, 800);

    return () => abortController.abort();
  }, []);

  return { users, isLoading, error };
};
