'use client';
import styles from './ShoppingItems.module.scss';
import notFav from '../../../../public/assets/newArrivals/notFav.svg';
import Image from 'next/image';
import { FaHeart } from "react-icons/fa";
import { shoppingList } from './ShoppingList';
import React from 'react';
import { useTheme } from '@/components/ThemeContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const ShoppingItems = () => {
  const {theme} = useTheme();
  const router = useRouter();
  return (
    <div className="row mx-0 ">
      {
        shoppingList.map((item:any, key:any)=>{
          return(
            
              <div className={`${styles.imageContainer} col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4 position-relative d-flex flex-column align-items-center text-capitalize my-md-3 my-sm-2 my-2`} key={key}>
                <Link href={{pathname: "/mens/#", query: {id: item.id, name: item.des}}} className='text-decoration-none text-black'>
                  <Image src={item.name} alt='item' className='img-fluid'/>
                  {!item.favourite?(<i className={`${styles.heart} bi bi-heart-fill position-absolute fs-xxl-5 btn m-0 p-0`}></i>):(<i className={`${styles.heart} bi bi-heart  position-absolute fs-xxl-5 btn m-0 p-0`}></i>)}    
                  <div className='row mx-0 d-flex align-items-center' style={{height:'50px'}}>
                    <p className='text-start fs-7 fs-sm-7 fs-md-6 fs-xxl-5 fs-xl-6 fs-lg-6 p-0 m-sm-0 m-0' style={{color:'#5A5A5A'}}>{item.des}</p>
                  </div>
                  <div className='row mx-0 d-flex align-items-center py-0 py-sm-0 py-md-1 py-xxl-2 py-xl-2 py-lg-2 '>
                    <p className='text-start fw-bold p-0 fs-7 fs-sm-6 fs-md-5 fs-xxl-4 fs-xl-5 fs-lg-4' style={{color:'#5A5A5A'}}>{item.price}</p>
                  </div>
                </Link>
              </div>
            
          )
        })
      }
    </div>
  )
}

export default ShoppingItems