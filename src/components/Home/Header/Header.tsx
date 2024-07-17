'use client';
import React, { useEffect, useState } from 'react';
// import SearchBar from './Search/SearchBar';
import MainHeading from './Heading/MainHeading';
import NewArrivals from './Arrivals/NewArrivals';
import { CiSearch } from "react-icons/ci";
import { Montserrat } from 'next/font/google';
import { useTheme } from '../../ThemeContext';
import { useLogin } from '../../LoginContext';
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from 'next/link';
import NavBar from '../NavBar/NavBar';
import styles from './Header.module.scss';
import { productList } from '@/dummy data/products';

// className={`${styles.header} ${theme==='dark' ? styles.darkHeader : styles.darkHeader}`}

// const montserrat = Montserrat({
//   weight: '400',
//   subsets: ['latin'],
//   variable: '--font-montserrat',
// })
const categories = [...new Set(productList.map((item:any)=>{
  return item
}))]

const Header = () => {
  const { theme } = useTheme();
  const {isLogIn, setIsLogIn} = useLogin();
  useEffect(() => {
    document.getElementById('searchBar').addEventListener('keyup', e=>{
      const element = e.currentTarget as HTMLInputElement
      const searchData = element.value.toLowerCase();
      const filterData = categories.filter((item:any)=>{
        return(
          item.des.toLowerCase().includes(searchData)
        )
      })
      displayItem(filterData)
    })
    window.addEventListener('mouseup',function(e){
      var searchBar = document.getElementById('searchRes');
      if(!(event.target as HTMLElement).closest('#searchRes')){
        searchBar.style.display = 'none';
      }
    }); 
    
    const displayItem = ((items:any)=>{
      document.getElementById('searchRes').innerHTML = items.map((item:any)=>{
        console.log(item)
        return(
            `<div className="bg-white">
              <div className={${styles.SearchImageCont} col-3 my-0 py-0 bg-white}>
                
              </div>
              <div className="col-3 my-0 py-0">
                <p>${item.des}</p>
              </div>
              <div className="col-3 my-0 py-0">
                <p>${item.price}</p>
              </div>
            </div>`
            // <img src=${item.name.src} alt="item" className='img-fluid'/>
        )
      })
    })
  // {document.getElementById('searchBar').closest('searchBar')?''}

    displayItem(categories)
  }, []);

  return (
    <>
      <div className={`${styles.search} col-3 d-xxl-block d-xl-block d-lg-block d-none  px-1 mb-1 ms-xxl-4 ms-xl-5 ms-lg-5`}  onClick={()=>{
        document.getElementById('searchRes').style.display='flex'
      }}>
        <div className="row mx-0">
          <div className="col-12 d-flex align-items-center justify-between my-0 py-0 rounded rounded-pill" style={{border:'1px solid black'}}>
            <div className="col-9 my-0 py-0">
              <input className="border-0" type="search" placeholder="Search Products..." id='searchBar'/>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center my-0 py-0 ">
              <button className="btn border-none px-0 fs-4" type="submit">
                <CiSearch/>
              </button>
            </div> 
          </div>
        </div> 
        <div className={`${styles.searchArea} row mx-0 mt-2`} >
          <div className={`${styles.searchRes} bg-white rounded-4 flex-column`} id='searchRes'></div>
        </div>
      </div>
      <div className='col-2 d-xxl-none d-xl-none d-lg-none d-block col-sm-2 col-md-2 m-xxl-auto m-auto p-0 text-center'>
        <NavBar />
      </div>
      <div className={`${styles.header} col-6 col-sm-6 col-md-6 col-xxl-4 col-xl-4 col-lg-3 d-flex align-items-center justify-content-center text-center`}>
        <p className="h1 text-uppercase fs-1 p-o m-0" >fashion<span ><b>nova</b></span></p>
      </div>
      <div className='col-xxl-3 col-xl-4 col-lg-4 col-md-3 col-sm-3 col-3 d-flex align-items-center justify-content-xxl-end justify-content-xl-end justify-content-lg-end justify-content-sm-center justify-content-md-center '>
        {isLogIn===true?<CiHeart className="pe-2" style={{fontSize:'30px'}}/>:''}
        {isLogIn===true?<IoCartOutline className="mx-3 "/>:''}
        
        {/* <CiHeart className="pe-2" style={{fontSize:'30px'}}/>
        <IoCartOutline className="mx-3 "/> */}

        <button className='btn d-xxl-block d-xl-block d-lg-block d-md-none d-none text-white text-uppercase py-lg-2 py-xl-2 px-3  me-4 rounded rounded-pill ' style={{backgroundColor: '#AB5D02',boxShadow: '0 1px 0 rgba(0, 0, 0, 0.11)'}} onClick={()=>{window.open( "/login", '_blank', "scrollbars=yes,top=0,left=350,width=800,height=1700" )
        }} rel="opener">login</button>
        {/* {isLogIn===true?window.close() as any:''} */}
        <button className='d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none text-uppercase text-black bg-transparent border-0 fs-md-5 fs-6'>login</button>

        <button className="btn ms-xxl-4 ms-xl-3 ms-lg-1 py-lg-2 py-xl-2 px-3 text-white d-xxl-flex d-xl-flex d-lg-flex d-md-none d-none align-items-center text-uppercase rounded rounded-pill " style={{backgroundColor: '#AB5D02',boxShadow: '0 1px 0 rgba(0, 0, 0, 0.11)'}}>
          new arrivals
          <MdOutlineArrowOutward className='ms-1 fs-6 '/>
        </button>
      </div>
    </>

  )
}

export default Header