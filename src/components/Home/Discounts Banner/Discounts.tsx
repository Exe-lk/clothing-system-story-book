'use client';

import styles from './Discounts.module.scss';
import React from 'react';
import Image from 'next/image';
// import lefttImg from '../../../../public/assets/discounts/leftImg.svg';
import lefttImg from '../../../../public/assets/discounts/leftImage.png';
// import rightImg from '../../../../public/assets/discounts/rightImg.svg';
import rightImg from '../../../../public/assets/discounts/rightImage.jpg';
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
      {/* <div className='card img-fluid position-relative' style={{background:'#F5F5F5'}}>
        <div className='d-flex align-items-center justify-content-between position-relative' style={{height:'600px'}}>
          <Image src={lefttImg} alt="lefttImg" className='card-img-top' style={{height:'600px'}}/>
          <Image src={rightImg} alt="rightImg" className='card-img-top d-md-block d-lg-block d-sm-none d-none' style={{height:'800px'}}/>
        </div>
        <div className='card-img-overlay d-flex flex-column align-items-center justify-content-center position-absolute' style={{width:'fit-content',height:'fit-content',top:'35%',left:'40%'}}>
          <h1 className='display-5 card-img-title text-capitalize my-4'> women’s latest fashion</h1>
          <h3 className='card-text text-capitalize my-4' style={{color:'#AB5D02'}}>20% discount</h3>
          <button className='btn text-white text-uppercase align-items-center' style={{background:'#AB5D02'}}>
            discover now
            <Image src={rightArrow1} alt="rightArrow1" className='ps-2' />
          </button>
        </div>
      </div> */}
      <div className={`${styles.leftImg} col-5 bg-info p-0`}>
        <Image src={lefttImg}  alt='lefttImg' className={`${styles.img} img-fluid object-fit-cover`}/>
      </div>
      <div className={`${styles.content} col-3 d-flex flex-column align-items-center justify-content-center `} style={{background:'rgba(245, 245, 245, 1)'}}>
          <h1 className='text-capitalize my-xxl-3 my-xl-3 my-lg-3 my-md-3 my-sm-2 my-2 fw-bold fs-xxl-1 fs-xl-1 fs-lg-2 fs-md-3 fs-sm-4 fs-7'> women’s latest fashion</h1>
          <h3 className='text-capitalize my-xxl-3 my-xl-3 my-lg-2 my-md-2 my-sm-2 my-1 w-100 fs-xxl-2 fs-xl-3 fs-lg-4 fs-md-3 fs-sm-5 fs-7' style={{color:'#AB5D02'}}>20% discount</h3>
          <div className='w-100'>
            <button className='btn text-white text-uppercase my-xxl-3 my-xl-3 my-lg-3 my-md-3 my-sm-2 my-2 fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-8 p-sm-1 p-1 p-xxl-2 p-xl-2 p-lg-2 p-md-2' style={{background:'#AB5D02'}}>
              discover now
              <i className="bi bi-arrow-right ps-xxl-2 ps-xl-2 ps-1"></i>
            </button>
          </div>
      </div>
      <div className={`${styles.rightImg} col-4 bg-info p-0`}>
        <Image src={rightImg}  alt='rightImg' className={`${styles.img} img-fluid object-fit-cover `}/>
      </div>
    </>
  )
}

export default Discounts;