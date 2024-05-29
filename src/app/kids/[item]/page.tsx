'use client';

import Image from 'next/image';
import styles from './page.module.scss';
import React, {use, useState} from 'react';
import Header from '@/components/Home/Header/Header';
import NavBar from '@/components/Home/NavBar/NavBar';
import Path from '@/components/Mens/Page Path/Path';
import SideBar from '@/components/Side Bar/SideBar';
import { useTheme } from '@/components/ThemeContext';
import Footer from '@/components/Home/Footer/Footer';
import { sizesLi } from '@/components/Mens/Left Container/Sizes/SizesList';
import { kidsCartList } from '../../../../public/assets/kidsItemsList';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { kidsRelatedItemsList } from '../../../../public/assets/kidsRelatedItemsList';
import notFav from '../../../../public/assets/newArrivals/notFav.svg';
import { FaHeart } from "react-icons/fa";
import { useSearchParams } from 'next/navigation';
import { usePathname } from 'next/navigation';

const page = () => {
  const {theme} = useTheme();
  const [value, setValue] = useState(0);
  const searchParams = useSearchParams();
  const pathName = usePathname();
  
  return (

    <>
      {
        kidsCartList.map(item=>(
          item.itemId==searchParams.get('id') && item.name==searchParams.get('name')? (

            <div className={`${styles.itemContainer} ${theme==='dark'?styles.darkItemContainer:''}`}>
              <div className={styles.aside}>
                <SideBar/>
              </div>
              <div className={styles.wrapper}>
                <Header />
                <NavBar />
                <Path prevPath={"home > kid's"} currentPath={` > ${item.name}`}/>
                <div className={styles.upperContent}>
                  <div className={styles.left}>
                    <div className={styles.top}>
                      <Image src={item.images[0]} alt='image' className={styles.itemImage}/>
                    </div>
                    <div className={styles.bottom}>
                      <div className={styles.item}></div>
                      <div className={styles.item}></div>
                      <div className={styles.item}></div>
                    </div>
                  </div>
                  <div className={styles.right}>
                    <div className={styles.heading}>
                      <div className={styles.title}>
                        <h1>{item.name}</h1>
                      </div>
                      <div className={styles.availability}>
                        <p>{item.availability}</p>
                      </div>
                    </div>
                    <div className={styles.details}>
                      <div className={styles.priceAndDes}>
                        <div className={styles.price}>
                          <p>rs: {item.price}</p>
                        </div>
                        <div className={styles.des}>
                          <p>{item.description}</p>
                        </div>
                      </div>
                      <div className={styles.size}>
                          <p>size</p>
                          <ul>
                            {
                              sizesLi.map(i=>{
                                return(
                                  <div className={styles.range}>
                                    <input type="radio" id="sizes" name="sizes" value={item.size}/>
                                    <label>{i.size}</label>
                                  </div>
                                )
                              })
                            }
                          </ul>
                      </div>
                      <div className={styles.colors}>
                        <p>colors</p>
                        <div className={styles.colorsList}>
                          <div style={{ ["background-color" as any]: item.colors[0] }}></div>
                          <div style={{ ["background-color" as any]: item.colors[1] }}></div>
                          <div style={{ ["background-color" as any]: item.colors[2] }}></div>
                          <div style={{ ["background-color" as any]: item.colors[3] }}></div>
                        </div>
                      </div>
                      <div className={styles.materials}>
                        <p className={styles.title}>materials</p>
                        <p className={styles.matDes}>{item.materials}</p>
                      </div>
                      <div className={styles.addToCart}>
                        <div className={styles.qtyAdder}>
                          <button className={styles.button} onClick={()=>{
                            {value>0? setValue(value-1): 0}
                          }}>
                            <FaMinus className={styles.icon} />
                          </button>
                          <input type="text" value={value} min={0}/>
                          <button className={styles.button} onClick={()=>{
                            setValue(value+1)
                          }}>
                            <FaPlus className={styles.icon} />
                          </button>
                        </div>
                        <div className={styles.cartBtn}>
                          <button>
                            <AiOutlineShoppingCart className={styles.icon}/>
                            <p>add to cart</p>
                          </button>
                        </div>
                      </div>
                      <div className={styles.pay}>
                        <button className={styles.payBtn} onClick={()=>{
                          window.open(`${pathName}/${item.itemId}/pay`, '_blank', "scrollbars=yes,top=0,left=350,width=800,height=1700")
                        }}>
                          pay now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.relatedItems}>
                  <div className={styles.top}>
                    <div className={styles.heading}>
                      <h1>related items</h1>
                    </div>
                    <div className={styles.des}>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                  </div>
                  <div className={styles.bottom}>
                    <div className={styles.content}>
                      {
                        kidsRelatedItemsList.map((item:any, key:any)=>{
                          return(
                            <div className={styles.item} >
                              <Image src={item.id} alt='item' className={styles.image}/>
                              {!item.favourite?(<Image src={notFav} alt='notFav' className={styles.notFav} />):(<FaHeart className={styles.fav}/>)}        
                              <p>{item.des}</p>
                              <p>{item.price}</p>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
                <Footer />
                </div>
              </div>
            
          ):null
        ))
      }
    </>
  )
}

export default page