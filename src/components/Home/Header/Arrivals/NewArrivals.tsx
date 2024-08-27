import React from 'react';
import styles from './Arrivals.module.scss';
import Image from 'next/image';
import arrow from '../../../../../public/arrow.svg';
import { Montserrat } from 'next/font/google';
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { useTheme } from '@/components/ThemeContext';

const montserrat = Montserrat({
    weight: '500',
    subsets: ['latin'],
    variable: '--font-montserrat',
  })

const NewArrivals = () => {
  return (
    <div className={styles.arrivalsContainer}>
      <CiHeart className={styles.icon}/>
      <IoCartOutline className={styles.icon}/>
      <FaRegUser className={styles.icon}/>
      <button className={`${styles.arrivalsButton} ${montserrat.variable}`}>
        new arrivals
        <Image src={arrow} alt='arrow' width={10} height={8} className={styles.arrowIcon}/>
      </button>
    </div>
  )
}

export default NewArrivals