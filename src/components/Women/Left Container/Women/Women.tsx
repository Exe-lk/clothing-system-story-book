'use client';
import styles from './Women.module.scss';
import { collectionList } from './WomenCollection';
import React from 'react';
import { useTheme } from '@/components/ThemeContext';

const Women = () => {
  const {theme} = useTheme();
  return (
    <div className={`${styles.women} ${theme==='dark'?styles.darkWomen:''}`}>
      <p>women's (5123)</p>
      <ul>
        {
          collectionList.map((i)=>{
            return(
              <li>{i.item}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Women