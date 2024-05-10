import React from 'react';
import SearchBar from './Search/SearchBar';
import MainHeading from './Heading/MainHeading';
import NewArrivals from './Arrivals/NewArrivals';
import styles from './Header.module.scss';


const Header = () => {
  return (
    <div className={styles.header}>
      <SearchBar />
      <MainHeading />
      <NewArrivals />
    </div>

  )
}

export default Header