'use client';

import styles from './NavBar.module.scss';
import React, { useState } from 'react';
import { useTheme } from '../../ThemeContext';
import Link from 'next/link'

const NavBar = () => {
  const {theme} = useTheme();
  const [active, setActive] = useState(false)
  return (
    <nav className={`${styles.navBar} navbar navbar-expand-lg`} aria-label='Offcanvas navbar large'>

        <button className="navbar-toggler m-md-0 border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" style={{color:'#AB5D02'}} onClick={()=>{
          setActive(!active)
        }}>
          <span className={`${active===true? 'bi bi-x-lg text-black':'navbar-toggler-icon'}`}></span>
        </button>
        <div className="offcanvas offcanvas-start vw-100 h-75" tabIndex={-1} id="offcanvas" aria-modal='true' role='dialog' aria-labelledby='offcanvasLabel' data-bs-scroll="true" data-bs-backdrop="false"  style={{marginTop:'65px'}}>

          <div className='offcanvas-header ' style={{zIndex:500}}>
            <div className='col-6 m-auto ' style={{height:'60px'}}>
              <div className="row d-flex align-items-center justify-content-center h-100 rounded rounded-pill">
                <div className="col-md-5 col-sm-6 col-8 m-1 p-0">
                  <input className="border-0 fs-md-5 fs-sm-5 fs-6" type="search" placeholder="Search Products..." />
                </div>
                <div className="col-md-2 col-sm-1 col-1 d-flex align-items-center justify-content-center m-0 p-0">
                  <button className="btn border-none px-0 fs-md-4 fs-sm-5 fs-md-6" type="submit">
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </div>
            </div> 
          </div>
          <div className='offcanvas-body d-flex justify-content-center align-items-center'>
            <ul className="navbar-nav text-capitalize fs-xxl-5">
              
              <li className="nav-item mx-4">
                <Link className="nav-link active" aria-current="page" href="/">home</Link>
              </li>
              <li className="nav-item mx-4">
                <Link href="/women" className="nav-link">women</Link>
              </li>
              <li className="nav-item mx-4">
                <Link href="/mens" className="nav-link">men</Link>
              </li>
              <li className="nav-item mx-4">
                <Link href="/kids" className="nav-link">kids</Link>
              </li>
              <li className="nav-item mx-4">
                <Link href="/aboutus" className="nav-link">about us</Link>
              </li>
              <li className="nav-item mx-4">
                <Link href="/contactus" className="nav-link">contact us</Link>
              </li>
              
            </ul>
          </div>
          {/* <div className='offcanvas-backdrop fade'></div> */}
        </div>
    </nav>
  )
}

export default NavBar;