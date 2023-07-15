import { routes } from '@/shared/routes';
import { Link } from '@/shared/ui/link';

import astronautsImage from './assets/astronauts.svg';
import styles from './styles.module.scss';
import { Container } from '@/shared/ui/container';

export const NotFoundPage = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.backgroundTitle}>404</h2>
            <h1 className={styles.title}>
              OOOps! <br />
              Page Not Found
            </h1>
            <p className={styles.text}>
              Sorry about that! Please visit our homepage to get where you need
              to go.
            </p>
            <Link to={routes.HOME}>Back to homepage</Link>
          </div>
          <img
            className={styles.image}
            src={astronautsImage}
            alt="404 not found"
          />
        </div>
      </Container>
    </div>
  );
};
