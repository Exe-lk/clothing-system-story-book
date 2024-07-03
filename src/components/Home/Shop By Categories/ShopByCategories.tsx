'use client';

import styles from './ShopByCategories.module.scss';
import Image from 'next/image';
import forWomens from '../../../../public/forWomens.svg';
import forMens from '../../../../public/forMens.svg';
import rightArrow2 from '../../../../public/rightArrow2.svg';
import forKids from '../../../../public/forKids.svg';
import React from 'react';
import { useTheme } from '../../ThemeContext';

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
                <Image src={rightArrow2} alt="rightArrow2" className='ms-2' />
              </button>
            </div>
            <div className='col px-0 w-50' >
              <Image src={forWomens} alt="forWomens" className='img-fluid '/>
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
                  <Image src={rightArrow2} alt="rightArrow2" className='ms-2' />
                </button>
              </div>
              <div className='col-3 w-50 h-100 position-relative'>
                <Image src={forMens} alt="forMens" className='img-fluid position-absolute' style={{right:'-120px',bottom:'0',height:'400px'}}/>
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
                  <Image src={rightArrow2} alt="rightArrow2" className='ms-2' />
                </button>
              </div>
              <div className='col-3 w-50 h-100 position-relative'>
              <Image src={forKids} alt="forKids" className='img-fluid position-absolute' style={{right:'-40px',bottom:'-20px',height:'260px'}} />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className='row mb-1 text-center'>
        <h1 className='text-uppercase fs-3 fs-sm-2 fs-md-1 fs-lg-1 fs-xl-1 fs-xxl-1 fw-bold'>shop by categories </h1>
        <p className='h5 fw-normal text-capitalize mb-4 fs-6 fs-sm-6 fs-md-4 fs-lg-4 fs-xl-4 fs-xxl-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>

      <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 p-1" style={{background:'linear-gradient(213.42deg, #EEEEF0 8.79%, #FFF7F0 80.12%)'}}>
        <div className="row h-100 mx-0 d-flex align-items-start my-4">
          <p className='h3 text-capitalize text-center '>for women’s</p>
          <div className='d-xxl-flex d-xl-flex d-lg-flex d-md-flex d-sm-flex d-block'>
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
              <Image src={forWomens} alt="forWomens" className='img-fluid '/>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 p-1 my-auto" >
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
            <Image src={forMens} alt="forMens" className='img-fluid'/>
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
            <Image src={forKids} alt="forKids" className='img-fluid'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShopByCategories