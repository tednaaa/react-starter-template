import { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

interface Props {
  children?: ReactNode;
}

export const Container: FC<Props> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
