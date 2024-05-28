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
    <div className={`${styles.shoppingItems} ${theme==='dark'?styles.darkShoppingItems:''}`}>
      {
          shoppingList.map((item:any, key:any)=>{
            return(
              <div className={styles.item}>
                <Link href={{pathname: "/mens/#", query: {id: item.id, name: item.des}}}  className={styles.link}>
                  <Image src={item.name} alt='item' />
                  {!item.favourite?(<Image src={notFav} alt='notFav' className={styles.notFav} />):(<FaHeart className={styles.fav}/>)}        
                  <p>{item.des}</p>
                  <p>{item.price}</p>
                </Link>
              </div>
            )
          })
        }
    </div>
  )
}

export default ShoppingItems