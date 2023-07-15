import { Link as RouterDomLink } from 'react-router-dom';
import { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

interface Props {
  to: string;
  children: ReactNode;
}

export const Link: FC<Props> = ({ to, children }) => {
  return (
    <RouterDomLink className={styles.link} to={to}>
      {children}
    </RouterDomLink>
  );
};
