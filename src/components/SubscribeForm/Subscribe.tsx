import styles from './Subscribe.module.scss';
import React from 'react';

const Subscribe = () => {
  return (
    <div className={styles.subscribe}>
      <div className={styles.left}>
        <p>Subscribe to our newsletter </p>
        <p>LORUM IPSUM DOLLERF!</p>
      </div>
      <div className={styles.right}>
        <input type="text" placeholder='email address' />
        <button>subscribe</button>
      </div>
    </div>
  )
}

export default Subscribe