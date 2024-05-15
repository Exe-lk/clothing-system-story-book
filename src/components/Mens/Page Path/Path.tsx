import styles from './Path.module.scss';
import { useTheme } from '@/components/ThemeContext';
import React from 'react';

const Path = () => {
  const {theme} = useTheme();
  return (
    <div className={`${styles.path} ${theme==='dark'?styles.darkPath:''}`}>
      <p>home <span>{' > '}men's</span></p>
    </div>
  )
}

export default Path