import { FC } from 'react';

import { Container } from '@/shared/ui/container';
import { MainLayout } from '@/layouts/main';
import { Users } from '@/modules/users';

import { Counter } from './counter/counter';

import styles from './styles.module.scss';
import welcomeImage from './assets/welcome.gif';

export const WelcomePage: FC = () => {
  return (
    <MainLayout title="Greetings in Main Layout! =)">
      <Container>
        <img src={welcomeImage} alt="" />
        <Users className={styles.users} />
        <Counter />
      </Container>
    </MainLayout>
  );
};
