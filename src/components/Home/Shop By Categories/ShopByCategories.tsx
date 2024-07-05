'use client';

import styles from './ShopByCategories.module.scss';
import img from 'next/image';
import forWomens from '../../../../public/forWomens.svg';
import forMens from '../../../../public/forMens.svg';
import rightArrow2 from '../../../../public/rightArrow2.svg';
import forKids from '../../../../public/forKids.svg';
import React from 'react';
import { useTheme } from '../../ThemeContext';
import forWomen from '../../../../public/assets/shopByCategories/forWomen.jpg';
import forMen from '../../../../public/assets/shopByCategories/forMen.jpg';
import forKid from '../../../../public/assets/shopByCategories/forKids.jpg';

const ShopByCategories = () => {
  const {theme} = useTheme();
  return (
    <>
    
      {/* <div className='col w-100 '>
        <div className='row mb-1 text-center' style={{height:'115px'}}>
          <h1 className='text-uppercase fs-3 fs-sm-2 fs-md-1 fs-lg-1 fs-xl-1 fs-xxl-1 fw-bold'>shop by categories</h1>
          <p className='h5 fw-normal text-capitalize mb-4 fs-6 fs-sm-6 fs-md-4 fs-lg-4 fs-xl-4 fs-xxl-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        
        <div className='row p-1 d-flex' style={{height:'520px'}}>
          <div className='col-12 col-sm-12 col-md-6 px-1 h-100 d-md-flex d-sm-block d-block justify-content-between align-col-xs-6 col-sm-2-center position-relative' style={{background:'linear-gradient(213.42deg, #EEEEF0 8.79%, #FFF7F0 80.12%)'}}>
            <div className='px-0 w-50 col-12 col-sm-6' >
              <p className='h3 text-capitalize text-start ps-3 mx-3 pt-5 pb-2'>for women’s</p>
              <ul className='list-unstyled ps-3 text-capitalize d-sm-grid' >
                <li className='my-3 mx-3'>dresses</li>
                <li className='my-3 mx-3'>sarees</li>
                <li className='my-3 mx-3'>t-shirts and blouses</li>
                <li className='my-3 mx-3'>jackets & coats</li>
                <li className='my-3 mx-3'>jeans</li>
                <li className='my-3 mx-3'>knit</li>
              </ul>

              <ul className="">
                <li className="list-group-item row">
                  <span className="col-xs-6 col-sm-2 col-12 ">Name1</span>
                  <span className="col-xs-6 col-sm-2 col-12 ">Date1</span>
                  <span className="col-xs-6 col-sm-2 col-12 ">Action1</span>
                  <span className="col-xs-6 col-sm-2 col-12 ">Arg1</span>
                </li>
                <li className="list-group-item row">
                  <span className="col-xs-6 col-sm-2 col-12 ">Name2</span>
                  <span className="col-xs-6 col-sm-2 col-12 ">Date2</span>
                  <span className="col-xs-6 col-sm-2 col-12 ">Action2</span>
                  <span className="col-xs-6 col-sm-2 col-12 ">Arg2</span>
                </li>
              </ul>
              <button className='btn text-uppercase ps-3 mx-3 text-start d-flex align-col-xs-6 col-sm-2-center' style={{color:'#AB5D02'}}>
                show more
                <img src={rightArrow2} alt="rightArrow2" className='ms-2' />
              </button>
            </div>
            <div className='col px-0 w-50' >
              <img src={forWomens} alt="forWomens" className='img-fluid '/>
            </div>
          </div>
          <div className='col-6 px-1 h-100 d-flex flex-column justify-content-between align-col-xs-6 col-sm-2-center'>
            <div className='row m-1 w-100 d-flex h-100' style={{background:'linear-gradient(213.42deg, #EEEEF0 8.79%, #FFF7F0 80.12%)'}}>
              <div className='col-3 w-50 h-50'>
                <p className='h3 text-capitalize text-start ps-3 mx-3 my-0 pt-2 pb-2'>for men’s</p>
                <ul className='list-unstyled ps-3 text-capitalize'>
                  <li className='my-2 mx-3'>t-shirts & shirts</li>
                  <li className='my-2 mx-3'>jeans</li>
                  <li className='my-2 mx-3'>jacket & coats</li>
                  <li className='my-2 mx-3'>shorts</li>
                </ul>
                <button className='btn text-uppercase ps-3 mx-3 text-start d-flex align-col-xs-6 col-sm-2-center ' style={{color:'#AB5D02'}}>
                  show more
                  <img src={rightArrow2} alt="rightArrow2" className='ms-2' />
                </button>
              </div>
              <div className='col-3 w-50 h-100 position-relative'>
                <img src={forMens} alt="forMens" className='img-fluid position-absolute' style={{right:'-120px',bottom:'0',height:'400px'}}/>
              </div>
            </div>
            <div className='row m-1 w-100 d-flex h-100' style={{background:'linear-gradient(213.42deg, #EEEEF0 8.79%, #FFF7F0 80.12%)'}}>
              <div className='col-3 w-50 h-100'>
                <p className='h3 text-capitalize text-start ps-3 mx-3 my-0 pt-2 pb-2'>for kids</p>
                <ul className='list-unstyled ps-3 text-capitalize'>
                  <li className='my-2 mx-3'>t-shirts & shirts</li>
                  <li className='my-2 mx-3'>jeans</li>
                  <li className='my-2 mx-3'>jacket & coats</li>
                  <li className='my-2 mx-3'>shorts</li>
                </ul>
                <button className='btn text-uppercase ps-3 mx-3 text-start d-flex align-col-xs-6 col-sm-2-center ' style={{color:'#AB5D02'}}>
                  show more
                  <img src={rightArrow2} alt="rightArrow2" className='ms-2' />
                </button>
              </div>
              <div className='col-3 w-50 h-100 position-relative'>
              <img src={forKids} alt="forKids" className='img-fluid position-absolute' style={{right:'-40px',bottom:'-20px',height:'260px'}} />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* common header for both pc and mobile views */}
      <h1 className='text-uppercase fs-4 fs-sm-2 fs-md-1 fs-lg-1 fs-xl-1 fs-xxl-1 fw-bold text-center'>shop by categories </h1>
      <p className='h5 fw-normal text-capitalize mb-4 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

      {/* pc view for SHOP BY CATEGORIES (for lg,xl,xxl sizes) */}
      <div className="col-6 p-1 d-xxl-block d-xl-block d-lg-block d-none" style={{background:'linear-gradient(213.42deg, #EEEEF0 8.79%, #FFF7F0 80.12%)'}}>
        <p className='h3 text-capitalize text-center '>for women’s</p>
        <div className="row h-100 mx-0 d-flex align-items-start my-4">

            <div className="col-6">
              <ul className='list-unstyled ps-3 text-capitalize' >
                <li className='my-5 mx-3'>dresses</li>
                <li className='my-5 mx-3'>sarees</li>
                <li className='my-5 mx-3'>t-shirts and blouses</li>
                <li className='my-5 mx-3'>jackets & coats</li>
                <li className='my-5 mx-3'>jeans</li>
                <li className='my-5 mx-3'>knit</li>
              </ul>
              <button className='btn text-uppercase ps-3 mx-3 text-start' style={{color:'#AB5D02'}}>
                show more
                <i className="bi bi-arrow-right ps-1" ></i>
              </button>
            </div>
            <div className="col my-auto">
              <img src={forWomens.src} alt="forWomens" className='img-fluid '/>
            </div>
        </div>
      </div>
      <div className="col-6 d-xxl-block d-xl-block d-lg-block d-none p-1 my-auto" >
        <div className="row mx-0 h-50 d-flex align-items-center" style={{background:'linear-gradient(213.42deg, #EEEEF0 8.79%, #FFF7F0 80.12%)'}}>
          <p className='h3 text-capitalize text-center my-4'>for men’s</p>
          <div className="col-6">
            <ul className='list-unstyled ps-3 text-capitalize'>
              <li className='my-5 mx-3'>t-shirts & shirts</li>
              <li className='my-5 mx-3'>jeans</li>
              <li className='my-5 mx-3'>jacket & coats</li>
              <li className='my-5 mx-3'>shorts</li>
            </ul>
            <button className='btn text-uppercase ps-3 mx-3 text-start' style={{color:'#AB5D02'}}>
              show more
              <i className="bi bi-arrow-right ps-1" ></i>
            </button>
          </div>
          <div className="col-6">
            <img src={forMens.src} alt="forMens" className='img-fluid'/>
          </div>
        </div>
        <div className="row mx-0 h-50 d-flex align-items-center" style={{background:'linear-gradient(213.42deg, #EEEEF0 8.79%, #FFF7F0 80.12%)'}}>
          <p className='h3 text-capitalize text-center my-4'>for kid’s</p>
          <div className="col-6">
            <ul className='list-unstyled ps-3 text-capitalize'>
              <li className='my-5 mx-3'>t-shirts & shirts</li>
              <li className='my-5 mx-3'>jeans</li>
              <li className='my-5 mx-3'>jacket & coats</li>
              <li className='my-5 mx-3'>shorts</li>
            </ul>
            <button className='btn text-uppercase ps-3 mx-3 text-start' style={{color:'#AB5D02'}}>
              show more
              <i className="bi bi-arrow-right ps-1" ></i>
            </button>
          </div>
          <div className="col-6">
            <img src={forKids.src} alt="forKids" className='img-fluid'/>
          </div>
        </div>
      </div>
      
      {/* mobile view for SHOP BY CATEGORIES (for xs,sm,md sizes) */}
      <div className={`${styles.image1} col-4 h-100 p-0 d-flex d-sm-flex d-md-flex d-lg-none d-xl-none d-xxl-none align-items-center justify-content-center position-relative`}>
        <img src={forWomen.src} alt='forWomen' className='img-fluid opacity-75'/>
        <div className='row mx-0 px-0 w-50 position-absolute top-0 text-white w-100 h-100 ' >
              <p className='text-capitalize fw-bolder my-auto fs-md-2 fs-sm-3 fs-3'>{`women’s`}</p>
              <ul className='list-unstyled text-capitalize fs-7 fs-md-6 fs-sm-7 d-flex flex-column justify-content-between' >
                <li className=''>dresses</li>
                <li className=''>sarees</li>
                <li className=''>t-shirts and blouses</li>
                <li className=''>jackets & coats</li>
                <li className=''>jeans</li>
                <li className=''>knit</li>
              </ul>
        </div>
      </div>
      <div className={`${styles.image2} col-4 h-100 p-0 d-flex d-sm-flex d-md-flex d-lg-none d-xl-none d-xxl-none align-items-center justify-content-center position-relative`}>
        <img src={forMen.src} alt='forMen' className='img-fluid opacity-75'/>
        <div className='row mx-0 px-0 w-50 position-absolute top-0 text-white w-100 h-100' >
              <p className='text-capitalize fw-bolder my-auto fs-3'>{`men’s`}</p>
              <ul className='list-unstyled text-capitalize fs-7 fs-md-6 fs-sm-7 d-flex flex-column justify-content-between' >
                <li className=''>t-shirts & shirts</li>
                <li className=''>jeans</li>
                <li className=''>jacket & coats</li>
                <li className=''>shorts</li>
                <li className=''>jeans</li>
                <li className=''>knit</li>
              </ul>
        </div>
      </div>
      <div className={`${styles.image3} col-4 h-100 p-0 d-flex d-sm-flex d-md-flex d-lg-none d-xl-none d-xxl-none align-items-center justify-content-center position-relative`}>
        <img src={forKid.src} alt='forKid' className='img-fluid opacity-75'/>
        <div className='row mx-0 px-0 w-50 position-absolute top-0 text-white w-100 h-100' >
              <p className='text-capitalize fw-bolder my-auto fs-3'>{`kid’s`}</p>
              <ul className='list-unstyled text-capitalize fs-7 fs-md-6 fs-sm-7 d-flex flex-column justify-content-between' >
                <li className=''>t-shirts & shirts</li>
                <li className=''>jeans</li>
                <li className=''>jacket & coats</li>
                <li className=''>shorts</li>
                <li className=''>jeans</li>
                <li className=''>knit</li>
              </ul>
        </div>
      </div>
    </>
  )
}

export default ShopByCategories