'use client';

import styles from './NavBar.module.scss';
import React from 'react';
import { useTheme } from '../ThemeContext';

const NavBar = () => {
  const {theme} = useTheme();
  return (
    <div className={`${styles.navBar} ${theme==='dark' ? styles.darkNavBar : ''}`}>
      <nav>
        <a href="#">home</a>
        <a href="#">women</a>
        <a href="#">men</a>
        <a href="#">kids</a>
        <a href="#">about us</a>
        <a href="#">contact us</a>
      </nav>
    </div>
  )
}

export default NavBar;