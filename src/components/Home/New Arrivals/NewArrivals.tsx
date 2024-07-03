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
      <div className='col-12 bg-white mb-1 text-center' style={{height:'115px'}}>
        <h1 className='h1 text-uppercase'>new arrivals</h1>
        <p className='h5 fw-normal text-capitalize mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>
      <div className={`${styles.newArrivals} row bg-white mx-auto `} style={{height:'1100px',placeItems:'center'}}>
          {
            newArrivalsList.map((item:any, key:any)=>{
              return(
                <div className='col-md-6 col-sm-6 col-lg-3 position-relative d-flex flex-column align-items-center' >
                  <Image src={item.id} alt='item' className='img-fluid card-img-top'/>
                  <div className="card-img-overlay">
                    {!item.favourite?(<IoHeartCircleSharp className={`${styles.notFav} card-title fs-3 `} />):(<BiHeartCircle className={`${styles.fav} fs-3`}/>)}        
                  </div>
                  <p className='text-center mt-1'>{item.des}</p>
                  <p className='text-center'>{item.price}</p>
                </div>
              )
            })
          }
          <button className='btn text-uppercase ps-3 mx-3 text-start d-flex align-items-center justify-content-end position-absolute bottom-0 text-end pe-5' style={{color:'#AB5D02'}}>
            show more
            <Image src={rightArrow2} alt="rightArrow2" className='ms-2' />
          </button>
      </div>
    </>
  )
};

export default NewArrivals