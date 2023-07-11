import { FC } from 'react';

import { useUsers } from '@/modules/users';

import styles from './styles.module.scss';
import welcomeImage from './assets/welcome.jpeg';

interface Props {
  className: string;
}

export const Users: FC<Props> = ({ className }) => {
  const { users, error } = useUsers();

  return (
    <div className={className}>
      <div className={styles.users}>
        <h2 className={styles.title}>Users</h2>
        {error && <p>{error}</p>}

        <ul>
          {users.map(({ id, name }) => {
            return <li key={id}>{name}</li>;
          })}
        </ul>
      </div>

      <img className={styles.image} src={welcomeImage} alt="" />
    </div>
  );
};
