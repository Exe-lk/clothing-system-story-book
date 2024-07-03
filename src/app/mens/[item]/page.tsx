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
import {mensCartList} from '../../../../public/assets/mensItemsList';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { mensRelatedItemsList } from '../../../../public/assets/mensRelatedItemsList';
import notFav from '../../../../public/assets/newArrivals/notFav.svg';
import { FaHeart } from "react-icons/fa";
import { useSearchParams } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { IoHeartCircleSharp } from "react-icons/io5";
import { BiHeartCircle } from "react-icons/bi";

const MensItem = () => {
  const {theme} = useTheme();
  const [value, setValue] = useState(0);
  const searchParams = useSearchParams();
  const pathName = usePathname();
  
  return (

    <>
      {/* {
        mensCartList.map(item=>(
          item.itemId==searchParams.get('id') && item.name==searchParams.get('name')? (

            <div className={`${styles.itemContainer} ${theme==='dark'?styles.darkItemContainer:''}`}>
              <div className={styles.aside}>
                <SideBar/>
              </div>
              <div className={styles.wrapper}>
                <Header />
                <NavBar />
                <Path prevPath={"home > men's"} currentPath={` > ${item.name}`}/>
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
                        mensRelatedItemsList.map((item:any, key:any)=>{
                          return(
                            <div className={styles.item} >
                              <Image src={item.id} alt='item' />
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
      } */}


{
        mensCartList.map((item:any,key:any)=>(
          item.itemId==searchParams.get('id') && item.name==searchParams.get('name')? (

            <div className={`${styles.itemContainer} ${theme==='dark'?styles.darkItemContainer:''} container-fluid h-100`} key={key}>
              
              <div className='row m-2 p-2 justify-content-between w-100' style={{height:'110px'}}>
                <Header />
              </div>

              <div className='row m-2 ' style={{height:'70px'}}>
                <NavBar />
              </div>

              <div className='row m-2 ' style={{height:'70px'}}>
                <nav aria-label="breadcrumb" className=' my-auto'>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/" className='text-decoration-none' style={{color: 'rgba(0, 0, 0, 0.35)'}}>Home</a></li>
                    <li className="breadcrumb-item"><a href="/mens" className='text-decoration-none' style={{color: 'rgba(0, 0, 0, 0.35)'}}>{`Men's`}</a></li>
                    <li className="breadcrumb-item active" aria-current="page">{item.name}</li>
                  </ol>
                </nav>
              </div>

              <div className='row m-2 d-sm-block d-block d-xxl-flex d-xl-flex d-lg-flex d-md-flex' >
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 h-100 border border-white p-1 d-sm-flex d-flex justify-content-center d-xxl-block d-xl-block d-lg-block d-md-block my-auto m-auto">
                  <div className="col-8 col-sm-8 col-xxl-12 col-xl-12 col-lg-12 col-md-12 mx-auto rounded-3 btn">
                    <Image src={item.images[0]} alt='image' className='img-fluid rounded-2'/>
                  </div>
                  <div className="col-3 col-sm-3 col-xxl-9 col-xl-9 col-lg-9 col-md-9 p-1 d-xxl-flex d-xl-flex d-lg-flex d-md-flex d-sm-flex d-flex flex-sm-column flex-column flex-xxl-row flex-xl-row flex-lg-row flex-md-row align-items-center justify-content-center mx-auto">
                    <div className=" mx-auto rounded-3 btn">
                      <Image src={item.images[1]} alt='image' className='img-fluid rounded-2'/>
                    </div>
                    <div className=" mx-auto rounded-3 btn">
                      <Image src={item.images[2]} alt='image' className='img-fluid rounded-2'/>
                    </div>
                    <div className=" mx-auto rounded-3 btn">
                      <Image src={item.images[3]} alt='image' className='img-fluid rounded-2'/>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 p-1" >

                  <div className='row mx-0 mb-2'>
                    <div className='col-10 my-auto'>
                      <h1 className='fs-5 fs-sm-2 fs-md-2 fs-lg-1 fs-xl-1 fs-xxl-1 fw-bold'>{item.name}</h1>
                    </div>
                    <div className='col-2 rounded-2 text-center my-auto text-capitalize mx-3' style={{background: 'hsla(32, 98%, 34%, 0.32)',width:'fit-content'}}>
                      <p className='text-center my-auto fs-7 fs-sm-6 fs-md-6 fs-lg-5 fs-xl-5 fs-xxl-5'>{item.availability}</p>
                    </div>
                  </div>

                  <div className='row mx-0 my-2 py-2'>
                    <div className='row'>
                      <h3 className='text-capitalize fs-5 fs-sm-2 fs-md-3 fs-lg-3 fs-xl-3 fs-xxl-3 fw-bold '>rs: {item.price}</h3>
                    </div>
                    <div className='row my-2'>
                      <p className='fs-6 fs-sm-6 fs-md-6 fs-lg-5 fs-xl-5 fs-xxl-5'>{item.description}</p>
                    </div>
                  </div>

                  <div className='row mx-0 py-2'>
                    <div className="col-12">
                        <div className="row text-capitalize">
                          <h4 className=''>size</h4>
                        </div>
                        <div className="row">
                          <ul className='d-grid ' style={{gridTemplateColumns: 'auto auto'}}>
                            {
                              sizesLi.map((item:any,key:any)=>{
                                return(
                                  <div className='p-2' key={key}>
                                    <input type="radio" id="sizes" name="sizes" value={item.size}/>
                                    <label className='ps-1 fs-6 fs-sm-6 fs-md-6 fs-lg-5 fs-xl-5 fs-xxl-5'>{item.size}</label>
                                  </div>
                                )
                              })
                            }
                          </ul>
                        </div>
                    </div>
                  </div>

                  <div className='row mx-0 my-1 py-2'>
                    <h4 className='text-capitalize'>colors</h4>
                    <div className='d-flex align-items-center justify-content-center'>
                      <div className='rounded-circle border border-black mx-xxl-5 mx-xl-5 mx-lg-5 mx-md-4 mx-sm-3 mx-3 my-2 p-2 btn' style={{ ["background-color" as any]: item.colors[0], height:'20px', width:'20px' }}></div>
                      <div className='rounded-circle border border-black mx-xxl-5 mx-xl-5 mx-lg-5 mx-md-4 mx-sm-3 mx-3 my-2 p-2 btn' style={{ ["background-color" as any]: item.colors[1], height:'20px', width:'20px' }}></div>
                      <div className='rounded-circle border border-black mx-xxl-5 mx-xl-5 mx-lg-5 mx-md-4 mx-sm-3 mx-3 my-2 p-2 btn' style={{ ["background-color" as any]: item.colors[2], height:'20px', width:'20px' }}></div>
                      <div className='rounded-circle border border-black mx-xxl-5 mx-xl-5 mx-lg-5 mx-md-4 mx-sm-3 mx-3 my-2 p-2 btn' style={{ ["background-color" as any]: item.colors[3], height:'20px', width:'20px' }}></div>
                    </div>
                  </div>

                  <div className='row mx-0 my-1 py-2'>
                    <h4 className='text-capitalize '>materials</h4>
                    <p className='ms-2 my-1 ps-3 fs-6 fs-sm-6 fs-md-6 fs-lg-5 fs-xl-5 fs-xxl-5'>{item.materials}</p>
                  </div>
                  <div className=' mx-0 my-2 p-2 d-flex align-items-center justify-content-xxl-start justify-content-xl-start justify-content-lg-start justify-content-md-start justify-content-sm-evenly justify-content-evenly'>
                    
                      <div className='rounded-pill d-flex align-items-center justify-content-between w-25' style={{border: '1px solid rgba(171, 93, 2, 1)'}}>
                        <button className='btn p-sm-1 p-1 p-md-2 p-lg-2 p-xl-2 p-xxl-2
                        ' onClick={()=>{
                          {value>0? setValue(value-1): 0}
                        }}>
                          <FaMinus className='' />
                        </button>
                        <input className=' w-100 mx-2 bg-transparent border-0 text-center my-auto' type="text" value={value} min={0} />
                        <button className='w-25 btn p-sm-1 p-1 p-md-2 p-lg-2 p-xl-2 p-xxl-2' onClick={()=>{
                          setValue(value+1)
                        }}>
                          <FaPlus className='' />
                        </button>
                      </div>        
                    
                    <div className="rounded-pill border border-black text-center ms-3" style={{background: 'rgba(246, 183, 80, 1)',width:'fit-content'}}>
                      <button className='btn d-flex align-items-center justify-content-center m-auto'>
                        <AiOutlineShoppingCart className='me-2'/>
                        <p className='p-0 m-0'>add to cart</p>
                      </button>
                    </div>
                  </div>
                  <div className='row mx-auto d-flex justify-content-sm-center justify-content-center justify-content-xxl-start justify-content-xl-start justify-content-lg-start justify-content-md-start my-2 p-2' >
                    <button className='btn w-50' style={{background:'rgba(171, 93, 2, 1)'}} onClick={()=>{
                      window.open(`${pathName}/${item.itemId}/pay`, '_blank', "scrollbars=yes,top=0,left=350,width=800,height=1700")
                      console.log(pathName)
                    }}>
                      pay now
                    </button>
                  </div>

                </div>
              </div>

              <div className='row m-2 m-2 p-2'>
                
              <div className='col-12 mb-1 text-center'>
                <h1 className='text-uppercase fs-3 fs-sm-2 fs-md-1 fs-lg-1 fs-xl-1 fs-xxl-1 fw-bold'>related items</h1>
                <p className='h5 fw-normal text-capitalize mb-4 fs-6 fs-sm-6 fs-md-4 fs-lg-4 fs-xl-4 fs-xxl-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
              <div className={`${styles.newArrivals} row mx-auto my-2`} style={{placeItems:'center'}}>
                {
                  mensRelatedItemsList.map((item:any, key:any)=>{
                    return(
                      <div className='col-md-6 col-sm-6 col-lg-3 position-relative d-flex flex-column align-items-center' key={key}>
                        <Image src={item.id} alt='item' className='img-fluid card-img-top'/>
                        <div className="card-img-overlay">
                          {!item.favourite?(<IoHeartCircleSharp className='card-title fs-3' />):(<BiHeartCircle className='fs-3'/>)}        
                        </div>
                        <p className='text-center mt-1'>{item.des}</p>
                        <p className='text-center'>{item.price}</p>
                      </div>
                    )
                  })
                }
              </div>

              </div>

              <div className='row m-2' style={{height:'500px'}}>
                <Footer />
              </div>

            </div>
            
          ):null
        ))
      }
    </>
  )
}

export default MensItem