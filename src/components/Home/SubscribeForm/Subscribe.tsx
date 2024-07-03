'use client';
import styles from './Subscribe.module.scss';
import React from 'react';
import { useTheme } from '../../ThemeContext';

const Subscribe = () => {
  const {theme} = useTheme();
  return (
    // <div className={`${styles.subscribe} ${theme==='dark' ? styles.darkSubscribe : ''}`}>
    //   <div className={styles.left}>
    //     <p>Subscribe to our newsletter </p>
    //     <p>LORUM IPSUM DOLLERF!</p>
    //   </div>
    //   <div className={styles.right}>
    //     <input type="text" placeholder='email address' />
    //     <button>subscribe</button>
    //   </div>
    // </div>

    <>
      <div className='col-5 mx-1 h-100 d-flex flex-column align-items-center justify-content-center text-uppercase text-start'>
        <p className='fs-5 line-height-1'>Subscribe to our newsletter </p>
        <p className='fs-6'>LORUM IPSUM DOLLERF!</p>
      </div>
      <div className='col-6 mx-1 h-100 d-flex align-items-center justify-content-center'>
        <input type="text" placeholder='email address' className='form-control w-50 me-4 rounded-pill'/>
        <button className='text-uppercase text-white px-5 py-2 ' style={{background:'#AB5D02',borderRadius: '20px',fontSize:'10px',letterSpacing:'1px'}}>subscribe</button>
      </div>
    </>
  )
}

export default Subscribe