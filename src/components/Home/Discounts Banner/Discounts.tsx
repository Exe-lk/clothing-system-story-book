'use client';

import styles from './Discounts.module.scss';
import React from 'react';
import Image from 'next/image';
import lefttImg from '../../../../public/assets/discounts/leftImg.svg';
import rightImg from '../../../../public/assets/discounts/rightImg.svg';
import rightArrow1 from '../../../../public/rightArrow1.svg';
import { useTheme } from '../../ThemeContext';

const Discounts = () => {
  const {theme} = useTheme();
  return (
    // <div className={`${styles.discounts} ${theme==='dark' ? styles.darkdiscounts : ''}`}>
    //   <div className={styles.left}>
    //     <Image src={lefttImg} alt="lefttImg" className={styles.icon1}/>
    //   </div>
    //   <div className={styles.middle}>
    //     <h1> women’s latest fashion</h1>
    //     <h3>20% discount</h3>
    //     <button>
    //       discover now
    //       <Image src={rightArrow1} alt="rightArrow1" className={styles.rightArrow1} />
    //     </button>
    //   </div>
    //   <div className={styles.right}>
    //     <Image src={rightImg} alt="rightImg" className={styles.icon2} />
    //   </div>
    // </div>

    <>
      <div className='card img-fluid position-relative' style={{background:'#F5F5F5'}}>
        <div className='d-flex align-items-center justify-content-between position-relative' style={{height:'600px'}}>
          <Image src={lefttImg} alt="lefttImg" className='card-img-top' style={{height:'600px'}}/>
          <Image src={rightImg} alt="rightImg" className='card-img-top d-md-block d-lg-block d-sm-none d-none' style={{height:'800px'}}/>
        </div>
        <div className='card-img-overlay d-flex flex-column align-items-center justify-content-center position-absolute' style={{width:'fit-content',height:'fit-content',top:'35%',left:'40%'}}>
          <h1 className='display-5 card-img-title text-capitalize mb-4'> women’s latest fashion</h1>
          <h3 className='card-text text-capitalize mb-4' style={{color:'#AB5D02'}}>20% discount</h3>
          <button className='btn text-white text-uppercase align-items-center' style={{background:'#AB5D02'}}>
            discover now
            <Image src={rightArrow1} alt="rightArrow1" className='ps-2' />
          </button>
        </div>
      </div>
        
    </>
  )
}

export default Discounts;