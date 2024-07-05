'use client';
import styles from './NewArrivals.module.scss';
import React from 'react';
import Image from 'next/image';
import { newArrivalsList } from './NewArrivalsList';
import notFav from '../../../../public/assets/newArrivals/notFav.svg';
import rightArrow2 from '../../../../public/rightArrow2.svg';
import { FaHeart } from "react-icons/fa";
import { IoHeartCircleSharp } from "react-icons/io5";
import { BiHeartCircle } from "react-icons/bi";

const NewArrivals = () => {
  return (
    // <div className={styles.newArrivals}>
    //   <h1>new arrivals</h1>
    //   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    //   <div className={styles.content}>
    //     {
    //       newArrivalsList.map((item:any, key:any)=>{
    //         return(
    //           <div className={styles.item} >
    //             <Image src={item.id} alt='item' />
    //             {!item.favourite?(<Image src={notFav} alt='notFav' className={styles.notFav} />):(<FaHeart className={styles.fav}/>)}        
    //             <p>{item.des}</p>
    //             <p>{item.price}</p>
    //           </div>
    //         )
    //       })
    //     }
    //   </div>
    //   <button className={styles.showMore}>
    //     show more
    //     <Image src={rightArrow2} alt='rightArrow2' className={styles.rightArrow2}/>
    //   </button>
    // </div>
    

    <>
        <h1 className='text-uppercase fs-4 fs-sm-2 fs-md-1 fs-lg-1 fs-xl-1 fs-xxl-1 fw-bold text-center'>new arrivals</h1>
        <p className='h5 fw-normal text-capitalize mb-4 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        
          {
            newArrivalsList.map((item:any, key:any)=>{
              return(
                <div className={`${styles.imageContainer} col-xxl-2 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-5 position-relative m-xxl-5 mx-3 my-2 m-sm-2 m-md-2 p-0 h-100 `} key={key}>
                  <Image src={item.id} alt='item' className={`${styles.image} img-fluid object-fit-cover`}/>
                  {!item.favourite?(<i className={`${styles.heart} bi bi-heart-fill position-absolute fs-xxl-5 btn m-0 p-0`}></i>):(<i className={`${styles.heart} bi bi-heart  position-absolute fs-xxl-5 btn m-0 p-0`}></i>)}        
                  <div className='row mx-0 d-flex align-items-center' style={{height:'50px'}}>
                    <p className='text-start fs-6 fs-sm-6 fs-xxl-5 fs-xl-5 fs-lg-5 p-0' style={{color:'#5A5A5A'}}>{item.des}</p>
                  </div>
                  <div className='row mx-0 d-flex align-items-center py-0 py-sm-0 py-md-1 py-xxl-2 py-xl-2 py-lg-2 '>
                    <p className='text-start fw-bold p-0 fs-6 fs-sm-5 fs-xxl-4 fs-xl-4 fs-lg-4' style={{color:'#5A5A5A'}}>{item.price}</p>
                  </div>
                </div>
              )
            })
          }
          
          {/* <button className='btn text-uppercase ps-3 mx-3 text-start d-flex align-items-center justify-content-end position-absolute bottom-0 text-end pe-5' style={{color:'#AB5D02'}}>
            show more
            <Image src={rightArrow2} alt="rightArrow2" className='ms-2' />
          </button> */}
    </>
  )
};

export default NewArrivals