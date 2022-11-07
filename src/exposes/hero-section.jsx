import { Button } from '@mkeeorg/federation-ui';
import cx from 'classnames';
import { useReward } from 'react-rewards';

import styles from './hero-section.module.css';

export default function HeroSection() {
  const { reward, isAnimating } = useReward('demo', 'confetti', {
    elementCount: 100,
  });

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.copyContent}>
          <h1 className={styles.title}>
            <span className={styles.titleText}>Data to enrich your</span>{' '}
            <span className={cx(styles.titleText, styles.titleEm)}>
              online business
            </span>
          </h1>
          <p className={styles.copyText}>
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className={styles.btnGroup}>
            <Button className={styles.btn}>Get started</Button>
            <Button
              onClick={reward}
              disabled={isAnimating}
              variant="white"
              className={styles.btn}
              id="demo"
            >
              Live demo
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.imgSection}>
        <img
          className={styles.img}
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
        />
      </div>
    </div>
  );
}
