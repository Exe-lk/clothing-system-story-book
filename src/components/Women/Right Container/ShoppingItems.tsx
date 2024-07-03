'use client';
import styles from './ShoppingItems.module.scss';
import notFav from '../../../../public/assets/newArrivals/notFav.svg';
import Image from 'next/image';
import { FaHeart } from "react-icons/fa";
import { shoppingList } from './ShoppingList';
import React from 'react';
import { useTheme } from '@/components/ThemeContext';
import Link from 'next/link';
import { IoHeartCircleSharp } from "react-icons/io5";
import { BiHeartCircle } from "react-icons/bi";

const ShoppingItems = () => {
  const {theme} = useTheme();
  return (
    // <div className={`${styles.shoppingItems} ${theme==='dark'?styles.darkShoppingItems:''}`}>
    //   {
    //       shoppingList.map((item:any, key:any)=>{
    //         return(
    //           <div className={styles.item}>
    //             <Link href={{pathname: "/women/#", query: {id: item.id, name: item.des}}}  className={styles.link}>
    //               <Image src={item.name} alt='item' className={styles.image}/>
    //               {!item.favourite?(<Image src={notFav} alt='notFav' className={styles.notFav} />):(<FaHeart className={styles.fav}/>)}        
    //               <p>{item.des}</p>
    //               <p>{item.price}</p>
    //             </Link>
    //           </div>
    //         )
    //       })
    //     }
    // </div>

    <div className= 'row bg-white mx-auto py-2' style={{placeItems:'center'}}>
      {
          shoppingList.map((item:any, key:any)=>{
            return(
              <div className='col-md-6 col-sm-6 col-lg-4 position-relative d-flex flex-column align-items-center text-capitalize' key={key}>
                <Link href={{pathname: "/women/#", query: {id: item.id, name: item.des}}} className='text-decoration-none text-black'>
                  <Image src={item.name} alt='item' className='img-fluid card-img-top'/>
                  <div className="card-img-overlay ps-4">
                    {!item.favourite?(<IoHeartCircleSharp className='card-title fs-3'/>):(<BiHeartCircle className='fs-3'/>)}        
                  </div>
                  <p className='text-center mt-1'>{item.des}</p>
                  <p className='text-center'>{item.price}</p>
                </Link>
              </div>
            )
          })
        }
    </div>
  )
}

export default ShoppingItems