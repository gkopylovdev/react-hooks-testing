import React from 'react';

import styles from './index.module.css';

const Loader = (
  props: { hasOverlay?: boolean }
) => {
  if (props.hasOverlay) {
    return (
      <div className={styles.overlay}>
        <div className={styles.loader} />
      </div>
    );
  }

  return (
    <div className={styles.loader} />
  );
};

export default Loader;