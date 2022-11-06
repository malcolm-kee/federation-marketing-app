import { Button } from '../components/button';
import img from '../images/hero.jpg';
import styles from './hero-section.module.css';
import cx from 'classnames';

export default function HeroSection() {
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
            <Button variant="white" className={styles.btn}>
              Live demo
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.imgSection}>
        <img className={styles.img} src={img} alt="" />
      </div>
    </div>
  );
}
