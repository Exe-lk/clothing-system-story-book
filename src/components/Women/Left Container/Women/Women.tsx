'use client';
import styles from './Women.module.scss';
import { collectionList } from './WomenCollection';
import React from 'react';
import { useTheme } from '@/components/ThemeContext';

const Women = () => {
  const {theme} = useTheme();
  return (
    // <div className={`${styles.women} ${theme==='dark'?styles.darkWomen:''}`}>
    //   <p>women's (5123)</p>
    //   <ul>
    //     {
    //       collectionList.map((i)=>{
    //         return(
    //           <li>{i.item}</li>
    //         )
    //       })
    //     }
    //   </ul>
    // </div>

    <div className='p-1 text-capitalize m-1'>
    <p>women's (5123)</p>
    <ul className='list-unstyled' style={{color: 'rgba(105, 105, 105, 1)'}}>
      {
        collectionList.map((i)=>{
          return(
            <li className='px-4 py-1'>{i.item}</li>
          )
        })
      }
    </ul>
    </div>
  )
}

export default Women