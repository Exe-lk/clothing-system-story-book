'use client';
import React from 'react';
import styles from './page.module.scss';
import Header from '@/components/Home/Header/Header';
import NavBar from '@/components/Home/NavBar/NavBar';
import Path from '@/components/Mens/Page Path/Path';
import Heading from '@/components/Mens/Left Container/All Categories/Heading';
import Women from '@/components/Women/Left Container/Women/Women';
import Sizes from '@/components/Mens/Left Container/Sizes/Sizes';
import Colors from '@/components/Mens/Left Container/Colors/Colors';
import Price from '@/components/Mens/Left Container/Price/Price';
import ShoppingItems from '@/components/Women/Right Container/ShoppingItems';
import SideBar from '@/components/Side Bar/SideBar';
import { useTheme } from '@/components/ThemeContext';

const page = () => {
  const {theme} = useTheme();
  return (
    <div className={`${styles.womenContainer} ${theme==='dark'?styles.darkWomenContainer:''}`}>
      <div className={styles.aside}>
        <SideBar/>
      </div>
      <div className={styles.wrapper}>
        <Header />
        <NavBar />
        <Path prevPath={'home'} currentPath={">women's"}/>
        <div className={styles.content}>
          <div className={styles.left}>
            <Heading />
            <Women />
            <Sizes />
            <Colors />
            <Price />
          </div>
          <div className={styles.right}>
            <ShoppingItems />
          </div>
        </div>
      </div>
      </div>
  )
}

export default page