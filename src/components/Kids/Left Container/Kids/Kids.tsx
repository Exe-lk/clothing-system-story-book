'use client';
import styles from './Kids.module.scss';
import { collectionList } from './KidsCollection';
import React from 'react';
import { useTheme } from '@/components/ThemeContext';

const Kids = () => {
  const {theme} = useTheme();
  return (
    <div className={`${styles.kids} ${theme==='dark'?styles.darkKids:''}`}>
      <p>kid's (5123)</p>
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

export default Kids