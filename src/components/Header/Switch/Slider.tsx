'use client';

import React from 'react';
import { useTheme } from '../../ThemeContext';
import styles from './Slider.module.scss';

const Slider = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    
    <label className={styles.switch} >
      <input 
      type="checkbox" 
      checked= {theme==='dark'}
      onChange={toggleTheme}
      />

      <span className={styles.slider + " " + styles.round} />
    </label>

  )
}

export default Slider