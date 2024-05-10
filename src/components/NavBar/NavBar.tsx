import styles from './NavBar.module.scss';
import React from 'react'

const NavBar = () => {
  return (
    <div className={styles.navBar}>
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