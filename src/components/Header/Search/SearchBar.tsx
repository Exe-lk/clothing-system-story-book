import styles from './SearchBar.module.scss';
import React from 'react';
import Image from 'next/image';
import search from '../../../../public/search.svg';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-montserrat',
  })
  
const SearchBar = () => {
    return(
        <div className={styles.searchBar}>
            <input className={montserrat.variable} type="text" placeholder='Search Products' />
            <Image src={search} alt="My SVG" width={24} height={24} className={styles.searchIcon}/>
        </div>
    )
}

export default SearchBar