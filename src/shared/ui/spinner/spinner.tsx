import { FC } from 'react';
import styles from './styles.module.scss';

interface Props {
  isActive: boolean;
}

export const Spinner: FC<Props> = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <div className={styles.showbox}>
      <div className={styles.loader}>
        <svg className={styles.circular} viewBox="25 25 50 50">
          <title>loader</title>
          <circle
            className={styles.path}
            cx="50"
            cy="50"
            r="20"
            fill="none"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
        </svg>
      </div>
    </div>
  );
};
