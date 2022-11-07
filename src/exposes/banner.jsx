import { Button } from '@mkeeorg/federation-ui';
import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline';
import * as React from 'react';

import styles from './banner.module.css';

export default function Banner() {
  const [show, setShow] = React.useState(true);

  return show ? (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.mainContent}>
            <span className={styles.iconWrapper}>
              <SpeakerphoneIcon className={styles.icon} aria-hidden="true" />
            </span>
            <p className={styles.contentText}>
              <span className={styles.shortTitle}>
                We announced a new feature!
              </span>
              <span className={styles.longTitle}>
                Big news! We're excited to announce a brand new feature.
              </span>
            </p>
          </div>
          <div className={styles.learnMore}>
            <Button
              variant="white"
              size="small"
              className={styles.learnMoreBtn}
            >
              Learn more
            </Button>
          </div>
          <div className={styles.dismissSection}>
            <DismissButton onClick={() => setShow(false)} />
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

const DismissButton = (props) => (
  <Button className={styles.dismissBtn} size="none" {...props}>
    <span className={styles.srOnly}>Dismiss</span>
    <XIcon className={styles.icon} aria-hidden="true" />
  </Button>
);
