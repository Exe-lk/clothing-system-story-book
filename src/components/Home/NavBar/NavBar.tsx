'use client';

import styles from './NavBar.module.scss';
import React from 'react';
import { useTheme } from '../../ThemeContext';
import Link from 'next/link'

const NavBar = () => {
  const {theme} = useTheme();
  return (
    <nav className= 'navbar navbar-expand-lg'>

        <button className="navbar-toggler m-md-0 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" style={{color:'#AB5D02'}}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center " id="navbarNavDropdown" >
          
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
    </nav>
  )
}

export default NavBar;