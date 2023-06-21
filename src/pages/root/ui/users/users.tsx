import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const Users = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(({ data }) =>
        setUsers(data.map((user: { name: string }) => user.name))
      )
      .catch(() => setError('Error fetching users'));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {error && <p>{error}</p>}

      <ul>
        {users.map((user) => {
          return <li key={user}>{user}</li>;
        })}
      </ul>
    </div>
  );
};
