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
      <div className='col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-6 col-6 mx-0 mx-sm-0 mx-xxl-1 mx-xl-1 mx-lg-1 mx-md-1 h-100 d-flex flex-column align-items-center justify-content-center text-uppercase text-start'>
        <p className='fs-xxl-3 fs-xl-4 fs-gl-4 fs-md-5 fs-sm-6 line-height-1'>Subscribe to our newsletter </p>
        <p className='fs-xxl-5 fs-xl-6 fs-sm-7'>LORUM IPSUM DOLLERF!</p>
      </div>
      <form className='col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-6 col-6  mx-0 mx-sm-0 mx-xxl-1 mx-xl-1 mx-lg-1 mx-md-1 h-100 d-flex align-items-center justify-content-center my-auto'>
        <input type="text" placeholder='email address' className='form-control w-50 me-xxl-4 me-xl-4 me-lg-4 me-md-4 me-sm-3 me-3 rounded-pill fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7 px-xxl-3 py-xxl-3'/>
        <button className='btn text-uppercase text-white px-xxl-4 px-xl-4 px-2 py-xxl-2 py-xxl-1 fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-8 fs-8' style={{background:'#AB5D02',borderRadius: '20px',fontSize:'10px',letterSpacing:'1px'}}>subscribe</button>
      </form>
    </>
  )
}

export default Subscribe