'use client'
import styles from './SideBar.module.scss';
import React, { act, useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { CgComponents } from "react-icons/cg";
import { CiHome } from "react-icons/ci";
import { PiCardsBold } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import { useTheme } from '../ThemeContext';
import Slider from './Switch/Slider';
import Link from 'next/link';
import { MdOutlineDashboard } from "react-icons/md";
import { LuComponent } from "react-icons/lu";
import { AiOutlineForm } from "react-icons/ai";
import { TbCards } from "react-icons/tb";
import { HiArrowRightStartOnRectangle } from "react-icons/hi2";


const SideBar = () => {
  const [active, setActive] = useState(false);
  const {theme} = useTheme();

  return (
    // <nav classNameNameName={`${styles.sideBar} ${theme==='dark'?styles.darkSideBar:''}`}>
    //   <div  classNameNameName={`${styles.sideBarInner} ${active?styles.open:''}`}>
    //     <header classNameNameName={styles.sideBarHeader}>
    //       <button classNameNameName={styles.headerButton} onClick={()=>{setActive(!active)}}>
    //         {
    //           active==false?<CiMenuBurger classNameNameName={styles.headerLogo}/>:<IoMdClose classNameNameName={styles.headerLogo}/>
    //         }    
    //       </button>

          
    //     </header>
    //     <nav classNameNameName={styles.sideBarMenu}>
    //       <button classNameNameName={styles.sideBarLink}>
    //         <Slider />
    //       </button>
    //       <Link href='/' classNameNameName={styles.sideBarLink}>
    //         <CiHome classNameNameName={styles.sideBarLogo}/>
    //         <span>Home</span>
    //       </Link>
    //       <Link href='/components' classNameNameName={styles.sideBarLink}>
    //         <CgComponents classNameNameName={styles.sideBarLogo}/>
    //         <span>Components</span>  
    //       </Link>
    //       <Link href='/' classNameNameName={styles.sideBarLink}>
    //         <PiCardsBold classNameNameName={styles.sideBarLogo}/>
    //         <span>Cards</span>
    //       </Link>
    //     </nav>
    //   </div>
    // </nav>
    
    <>
      {/* <div className={styles.animation}>
        <ul className={`${styles.sideNav} navbar-nav ` }>
          <li className="nav-item">
            <a className="nav-link" href="#" title="Dashboard">
            <i className="fs-4 bi-speedometer2"></i> Dashboard <i className={`${styles.shortmenu} fs-4 bi-speedometer2 ` }></i>
            </a>
          </li>
        </ul>
      </div> */}

      {/* <div className="container">
          <div className="row flex-nowrap">
              <div className="col-auto col-md-3 col-xl-2 px-sm-2 bg-dark"> */}
                  <div className={`${styles.sideNav} h-100 d-none d-sm-none d-md-none d-lg-flex flex-column justify-content-evenly align-items-center overflow-y-scroll`} >
                    <a href="/" className="d-flex align-items-center pb-3  text-white text-decoration-none  " style={{height:'110px'}}>
                        <span className="fs-5">
                          <p className="h1 text-uppercase d-none " >f<span style={{letterSpacing:'-2px',marginLeft: '-7px'}}><b>n</b></span></p>
                        </span>
                    </a>
                    <ul className={`${styles.list} navbar-nav vh-100 w-100 d-block align-content-between overflow-y-scroll m-auto`} id="menu">
                        <li className="nav-item d-flex align-items-center mx-auto rounded-2   ">
                          <HiArrowRightStartOnRectangle className={`${styles.shortmenu} bi-house text-white ms-1 me-3 fs-4` }/>
                          <a href="#" className={`${styles.menuDetails} nav-link align-middle text-white d-none me-2 fs-6 line-height-4 `}> Getting Started </a>
                            {/* <a href="#"><i className={`${styles.shortmenu} bi-house text-white` }></i></a> */}
                        </li>
                        <li className="nav-item d-flex align-items-center mx-auto rounded-2 my-4">
                          <i className={`${styles.shortmenu} bi-house text-white ms-1 me-3 fs-4` }></i>
                          <a href="#" className={`${styles.menuDetails} nav-link align-middle text-white d-none `}> Home </a>
                            {/* <a href="#"><i className={`${styles.shortmenu} bi-house text-white` }></i></a> */}
                        </li>
                    
                    
                        <li className="nav-item d-flex align-items-center  mx-auto  rounded-2 my-4">
                          <MdOutlineDashboard className={`${styles.shortmenu} bi-house text-white ms-1 me-3 fs-4` }/>
                          <a href="#" className={`${styles.menuDetails} nav-link align-middle text-white d-none `}> Dashboard </a>
                            {/* <a href="#"><i className={`${styles.shortmenu} bi-house text-white` }></i></a> */}
                        </li>
                  
                    
                        {/* <li className="nav-item d-flex align-items-center  mx-auto rounded-2">
                          <LuComponent className={`${styles.shortmenu} bi-house text-white ms-1 me-3 fs-4` }/>
                          <a href="#" className={`${styles.menuDetails} nav-link align-middle text-white d-none`}> Components </a>
                        </li> */}

                        {/* <li className="nav-item d-flex flex-column align-items-start mx-auto rounded-2" onClick={()=>{
                          setActive(!active);
                        }}>
                          <div className="nav-item d-flex align-items-center rounded-2 m-0 p-0 ">
                            <LuComponent className={`${styles.shortmenu} bi-house text-white ms-1 me-3 fs-4` }/>
                            <a href="#submenu2" data-bs-toggle="collapse" className={`${styles.menuDetails} nav-link align-middle text-white d-none`}> Components 
                            </a>
                            <i className={`${active===true ?'bi bi-caret-down-fill text-white':'bi bi-caret-right-fill text-white'} `}></i>
                          </div>
                          <ul className={`${active===true? 'collapse': ''} nav ms-1`} id="submenu2" data-bs-parent="#menu">
                              <li className="w-100">
                                  <a href="#" className="nav-link px-0 text-decoration-none text-white"> <span className="">Button</span> 1</a>
                              </li>
                              <li>
                                  <a href="#" className="nav-link px-0 text-decoration-none text-white"> <span className="">Search Bar</span> 2</a>
                              </li>
                          </ul>
                        </li> */}

                        <li className='nav-item my-4'>
                          <li className="nav-item d-flex align-items-center  mx-auto rounded-2" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true" onClick={()=>{
                          setActive(!active);
                          }}>
                            <LuComponent className={`${styles.shortmenu} bi-house text-white ms-1 me-3 fs-4` }/>
                            <Link href="#" className={`${styles.menuDetails} nav-link align-middle text-white d-none `}> Components </Link>
                            <i className={`${active===true ?'bi bi-caret-down-fill text-white mx-1':'bi bi-caret-right-fill text-white mx-1'} `}></i>
                          </li>

                          <div className={`${active===true?'show':'collapse'}`} id="home-collapse">
                            <ul className={`${styles.menuDetails} btn-toggle-nav list-unstyled fw-normal pb-1 small text-white d-none ms-4`} >
                              <Link href='#' className={`${styles.item} btn text-start w-100`}>Component 1</Link>
                              <Link href='#' className={`${styles.item} btn text-start w-100`}>Component 2</Link>
                              <Link href='#' className={`${styles.item} btn text-start w-100`}>Component 3</Link>
                            </ul>

                          </div>
                        </li>
                    
                    
                        <li className="nav-item d-flex align-items-center  mx-auto rounded-2 my-4">
                          <AiOutlineForm className={`${styles.shortmenu} bi-house text-white ms-1 me-3 fs-4` }/>
                          <a href="#" className={`${styles.menuDetails} nav-link align-middle text-white d-none `}> Forms </a>
                            {/* <a href="#"><i className={`${styles.shortmenu} bi-house text-white` }></i></a> */}
                        </li>
                    
                    
                        <li className="nav-item d-flex align-items-center  mx-auto rounded-2 my-4">
                          <TbCards className={`${styles.shortmenu} bi-house text-white ms-1 me-3 fs-4` }/>
                          <a href="#" className={`${styles.menuDetails} nav-link align-middle text-white d-none `}> Cards </a>
                            {/* <a href="#"><i className={`${styles.shortmenu} bi-house text-white` }></i></a> */}
                        </li>


                    </ul>
                  </div>
              {/* </div> 
          </div>
      </div> */}
    </>
  )
}

export default SideBar