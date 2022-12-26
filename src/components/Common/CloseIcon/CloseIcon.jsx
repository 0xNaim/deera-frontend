/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styles from './CloseIcon.module.scss';

const CloseIcon = () => (
  <div className={styles.closeContainer}>
    <div className={styles.leftRight} />
    <div className={styles.rightLeft} />
    {/* <label className={styles.close}>close</label> */}
  </div>
);

export default CloseIcon;
