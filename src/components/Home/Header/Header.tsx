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
    <form className='col-xxl-3 col-4 d-flex align-items-center justify-content-center'>
      <input className="form-control w-75 me-2 border-top-0 border-start-0 border-end-0" type="search" placeholder="Search Products"></input>
      <button className="btn border-none px-0 fs-4" style={{marginLeft:'-50px'}} type="submit">
        <CiSearch/>
      </button>
    </form>
    <div className='col-4 m-auto text-center'>
      <p className="h1 text-uppercase" >fashion<span style={{letterSpacing:'-2px',marginLeft: '-7px'}}><b>nova</b></span></p>
    </div>
    <div className='col-4 d-flex align-items-center justify-content-center'>
      <CiHeart className="pe-2" style={{fontSize:'30px'}}/>
      <IoCartOutline className="mx-3" style={{fontSize:'20px'}}/>
      {/* <FaRegUser className="mx-3 " style={{fontSize:'20px'}} onClick={()=>{window.open( "/login", '_blank', "scrollbars=yes,top=0,left=350,width=800,height=1700")}}/> */}
      <button className='btn text-white text-uppercase py-1 px-3' style={{backgroundColor: '#AB5D02',boxShadow: '0 1px 0 rgba(0, 0, 0, 0.11)'}} onClick={()=>{window.open( "/login", '_blank', "scrollbars=yes,top=0,left=350,width=800,height=1700")}}>login</button>
      <button className="btn mx-2 py-1 px-3 text-white d-flex align-items-center text-uppercase" style={{backgroundColor: '#AB5D02',boxShadow: '0 1px 0 rgba(0, 0, 0, 0.11)'}}>
        new arrivals
        <MdOutlineArrowOutward className='ms-1' style={{fontSize:'20px'}}/>
      </button>
    </div>
    </>

  )
}

export default Header