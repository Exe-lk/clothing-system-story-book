'use client';
import React, { useState } from 'react';
// import SearchBar from './Search/SearchBar';
import MainHeading from './Heading/MainHeading';
import NewArrivals from './Arrivals/NewArrivals';
import { CiSearch } from "react-icons/ci";
import { Montserrat } from 'next/font/google';
import { useTheme } from '../../ThemeContext';
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from 'next/link';
import NavBar from '../NavBar/NavBar';
import styles from './Header.module.scss';
// className={`${styles.header} ${theme==='dark' ? styles.darkHeader : styles.darkHeader}`}

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const Header = () => {
  const [isLogIn, setIsLogIn] = useState(false);
  const { theme } = useTheme();
  return (
    <>
    <div className='col-3 d-xxl-block d-xl-block d-lg-block d-none rounded rounded-pill px-1' style={{border:'1px solid black'}}>
      <div className="row mx-0 d-flex align-items-center justify-between my-0 py-0">
        <div className="col-9 my-0 py-0">
          <input className="border-0" type="search" placeholder="Search Products..." />
        </div>
        <div className="col-3 d-flex align-items-center justify-content-center my-0 py-0">
          <button className="btn border-none px-0 fs-4" type="submit">
            <CiSearch/>
          </button>
        </div>
        
      </div>
    </div>
    <div className='col-2 d-xxl-none d-xl-none d-lg-none d-block col-sm-2 col-md-2 m-xxl-auto m-auto p-0 text-center'>
      <NavBar />
    </div>
    <div className={`${styles.header} col-6 col-sm-6 col-md-6 col-xxl-5 col-xl-5 col-lg-5 d-flex align-items-center justify-content-center text-center`}>
      <p className="h1 text-uppercase fs-1 p-o m-0" >fashion<span ><b>nova</b></span></p>
    </div>
    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-3 col-sm-3 col-3 d-flex align-items-center justify-content-center justify-content-sm-center justify-content-md-center '>
      {/* <CiHeart className="pe-2" style={{fontSize:'30px'}}/> */}
      {/* <IoCartOutline className="mx-3 "/> */}

      <button className='btn d-xxl-block d-xl-block d-lg-block d-md-none d-none text-white text-uppercase py-xxl-2 py-xl-1 px-3  me-4 rounded rounded-pill' style={{backgroundColor: '#AB5D02',boxShadow: '0 1px 0 rgba(0, 0, 0, 0.11)'}} onClick={()=>{window.open( "/login", '_blank', "scrollbars=yes,top=0,left=350,width=800,height=1700")}}>login</button>
      <button className='d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none text-uppercase bg-transparent border-0 fs-md-5 fs-6'>login</button>

      <button className="btn ms-xxl-4 ms-xl-3 py-xxl-2 py-xl-1 px-3 text-white d-xxl-flex d-xl-flex d-lg-flex d-md-none d-none align-items-center text-uppercase rounded rounded-pill" style={{backgroundColor: '#AB5D02',boxShadow: '0 1px 0 rgba(0, 0, 0, 0.11)'}}>
        new arrivals
        <MdOutlineArrowOutward className='ms-1 fs-6'/>
      </button>
    </div>
    </>

  )
}

export default Header