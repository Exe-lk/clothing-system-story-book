'use client';

import styles from './NavBar.module.scss';
import React, { useState } from 'react';
import { useTheme } from '../../ThemeContext';
import Link from 'next/link'
import Documentation from './Doc/Documentation';
import MainMenu from './Side Bar Main/MainMenu';

const NavBar = () => {
  const {theme} = useTheme();
  const [active, setActive] = useState(false);
  const [sliderOn, setSliderOn] = useState(false);
  return (
    <nav className={`${styles.navBar} navbar navbar-expand-lg`} aria-label='Offcanvas navbar large'>

        <button className="navbar-toggler m-md-0 border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" style={{color:'#AB5D02'}} onClick={()=>{
          setActive(!active)
        }}>
          <span className={`${active===true? 'bi bi-x-lg text-black':'navbar-toggler-icon'}`}></span>
        </button>
        <div className={`${styles.offcanvas} offcanvas offcanvas-start vw-100`} tabIndex={-1} id="offcanvas" aria-modal='true' role='dialog' aria-labelledby='offcanvasLabel' data-bs-scroll="true" data-bs-backdrop="false">

          <div className='offcanvas-header ' style={{zIndex:500}}>
            <div className='col-md-6 col-sm-6 col-10 m-auto d-flex align-items-center justify-content-start justify-content-sm-center justify-content-md-center p-1' style={{height:'60px'}}>
                <i className="bi bi-search mx-2 btn"></i>
                <input className={`${styles.searchBar} rounded-pill px-2 py-1`} type="search" placeholder="Search Products..." />
            </div> 
          </div>
          <div className='offcanvas-body d-xxl-flex d-xl-flex d-lg-flex d-none align-items-center justify-content-center'>
            <ul className="navbar-nav text-capitalize fs-5">
                
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

          <div className='offcanvas-body d-xxl-none d-xl-none d-lg-none d-flex flex-column'>
            <div className='row mx-0 fs-5'>
              {/* Slider for documentation */}
              <div className="form-check form-switch fs-md-3 fs-sm-4 fs-4 d-flex align-items-center justify-content-center my-2 col-12  mx-4">
                <input className={`${styles.switch} form-check-input me-4`} type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={()=>{
                  setSliderOn(!sliderOn)
                }} />
                <label className="form-check-label fs-md-3 fs-sm-4 fs-4" htmlFor="flexSwitchCheckDefault">Documentation</label>
              </div>
            </div> 
          
            <div className="row mx-0 mt-4 ">
              {sliderOn===true?(<Documentation />):(<MainMenu />)}
            </div>
          </div>
          {/* <div className='offcanvas-backdrop fade'></div> */}
        </div>
    </nav>
  )
}

export default NavBar;