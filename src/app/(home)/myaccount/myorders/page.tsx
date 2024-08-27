'use client'
import NavBar from '@/components/Home/NavBar/NavBar';
import styles from './page.module.scss';
import React, { useState } from 'react';
import itemMyOrders from '../../../../../public/assets/my orders/item.png';
import Footer from '@/components/Home/Footer/Footer';
import Link from 'next/link';
import LeftMenu from '@/components/My Orders/Left Menu/LeftMenu';

const MyOrders = () => {
  const [display, setDisplay] = useState({
    active: true,
    completed: false
  });

  return (
    <div className="container-fluid h-100  p-0">

    <div className='row mx-1 mx-sm-1 mx-md-1 mx-lg-0 mx-xl-0 mx-xxl-0 my-3 '>
      <nav aria-label="breadcrumb" className=' my-auto'>
        <ol className="breadcrumb fs-7 fs-sm-6 fs-md-5 fs-xxl-5 fs-xl-5 fs-lg-5">
          <li className="breadcrumb-item"><a href="/" className='text-decoration-none' style={{color: 'rgba(0, 0, 0, 0.35)'}}>Home</a></li>
          <li className="breadcrumb-item"><a href="/myaccount" className='text-decoration-none' style={{color: 'rgba(0, 0, 0, 0.35)'}}>My Account</a></li>
          <li className="breadcrumb-item active" aria-current="page">My Orders</li>
        </ol>
      </nav>
    </div>

    <div className='row mx-0 my-3   h-100'>
      <div className={`${styles.heading} col-12 d-xxl-none d-xl-none d-lg-none d-md-block d-sm-block d-block text-center`}>
        <h3 className='position-relative fw-bold'>Hello Jhanvi</h3>
        <p>Welcome to your Account</p>
      </div>
      <LeftMenu />
      <div className={`${styles.right} col-xxl-9 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 p-xxl-1 p-xl-1 p-lg-1 p-md-0 p-sm-0 p-0 d-block ms-auto me-auto  h-100`}>

        <div className="row mx-0">
          <h4 className='position-relative'>My Orders</h4>
        </div>

        <div className={`${styles.ordesSec} row mx-0`}>
          <div className="col-6 p-0 d-grid">
            <p className={`${display.active===true? `${styles.active}` : ''} fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6 position relative  btn rounded-0`} onClick={()=>{
              setDisplay({
                active: true,
                completed: false
              })
            }}>Active</p>
          </div>
          <div className="col-6 p-0 d-grid">
            <p className={`${display.completed===true? `${styles.active}` : ''} fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6 position relative  btn rounded-0`}onClick={()=>{
              setDisplay({
                active: false,
                completed: true
              })
            }}>Completed</p>
          </div>
        </div>
        <div className={`${styles.ordesDetails} row mx-0 h-100`}>
            <div className={`${display.active===true? `d-block`:'d-none' } col-12 `}>
              <div className='my-1' style={{border:'3px dotted #AB5D02'}}>
                <div className={`${styles.recipt} row mx-0`} style={{background:'#F6F6F6'}}>
                  <p className='fw-bold text-capitalize ps-xxl-3 ps-xl-3 ps-lg-3 ps-ms-2 ps-sm-2 ps-2 fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Order no: #123456789</p>
                  <div className="col-6 ps-xxl-3 ps-xl-3 ps-lg-3 ps-ms-2 ps-sm-2 ps-2">
                    <p className='fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Order Date :<span style={{color:'#BEBCBD'}}> 2 July 2024 2:40 PM </span> </p>
                    <p className='fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Estimated Delivery Date :  <span style={{color:'#BEBCBD'}}> 8 July 2024 </span> </p>
                  </div>
                  <div className="col-6 text-end pe-xxl-3 pe-xl-3 pe-lg-3 pe-ms-2 pe-sm-2 pe-2">
                    <p className='fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Order Status :  <span style={{color:'#BEBCBD'}}> Inprogress </span>  </p>
                    <p className='fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Payment Method :  <span style={{color:'#BEBCBD'}}> Cash on delivery </span>  </p>
                  </div>
                </div>
                <div className={`${styles.details} row mx-0  mb-3 border-bottom-black`}>
                  <div className="col-2  d-flex align-items-center justify-content-start  ">
                    <img src={itemMyOrders.src} alt="item" className='img-fluid object-fit-cover'/>
                  </div>
                  <div className="col-4  d-flex flex-column align-items-start justify-content-center">
                    <h5 className='p-0 m-0 text-start fw-bold fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Black Printed T-shirt </h5>
                  </div>
                  <div className="col-3  d-flex flex-column align-items-start justify-content-center">
                    <p className='p-0 m-0 fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6 '>Colour : <span style={{color:'rgba(128, 125, 126, 1)'}}>Pink</span></p>
                    <p className='p-0 m-0 fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Quantity : <span style={{color:'rgba(128, 125, 126, 1)'}}>1</span></p>
                  </div>
                  <div className="col-3  d-flex flex-column align-items-center justify-content-center">
                    <p className='fs-6 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6 text-center w-100 fw-bold' style={{color:'rgba(128, 125, 126, 1)'}}>Rs 1700.00</p>
                  </div>
                </div>
              </div>


              <div className='my-1' style={{border:'3px dotted #AB5D02'}}>
                <div className={`${styles.recipt} row mx-0`} style={{background:'#F6F6F6'}}>
                  <p className='fw-bold text-capitalize ps-xxl-3 ps-xl-3 ps-lg-3 ps-ms-2 ps-sm-2 ps-2 fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Order no: #123456789</p>
                  <div className="col-6 ps-xxl-3 ps-xl-3 ps-lg-3 ps-ms-2 ps-sm-2 ps-2">
                    <p className='fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Order Date :<span style={{color:'#BEBCBD'}}> 2 July 2024 2:40 PM </span> </p>
                    <p className='fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Estimated Delivery Date :  <span style={{color:'#BEBCBD'}}> 8 July 2024 </span> </p>
                  </div>
                  <div className="col-6 text-end pe-xxl-3 pe-xl-3 pe-lg-3 pe-ms-2 pe-sm-2 pe-2">
                    <p className='fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Order Status :  <span style={{color:'#BEBCBD'}}> Inprogress </span>  </p>
                    <p className='fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Payment Method :  <span style={{color:'#BEBCBD'}}> Cash on delivery </span>  </p>
                  </div>
                </div>
                <div className={`${styles.details} row mx-0  mb-3`}>
                  <div className="col-2  d-flex align-items-center justify-content-start ">
                    <img src={itemMyOrders.src} alt="item" className='img-fluid object-fit-cover'/>
                  </div>
                  <div className="col-4  d-flex flex-column align-items-start justify-content-center">
                    <h5 className='p-0 m-0 text-start fw-bold fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Black Printed T-shirt </h5>
                  </div>
                  <div className="col-3  d-flex flex-column align-items-start justify-content-center">
                    <p className='p-0 m-0 fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Colour : <span style={{color:'rgba(128, 125, 126, 1)'}}>Pink</span></p>
                    <p className='p-0 m-0 fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Quantity : <span style={{color:'rgba(128, 125, 126, 1)'}}>1</span></p>
                  </div>
                  <div className="col-3  d-flex flex-column align-items-center justify-content-center">
                    <p className='fs-6 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6 text-center w-100 fw-bold' style={{color:'rgba(128, 125, 126, 1)'}}>Rs 1700.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${display.completed===true? `d-block`:'d-none'} col-12 `}>
            
            <div className='my-1' style={{border:'3px dotted #AB5D02'}}>

              <div className={`${styles.recipt} row mx-0`} style={{background:'#F6F6F6'}}>
                <p className='fw-bold text-capitalize ps-xxl-3 ps-xl-3 ps-lg-3 ps-ms-2 ps-sm-2 ps-2 fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Order no: #123456789</p>
                <div className="col-6 ps-xxl-3 ps-xl-3 ps-lg-3 ps-ms-2 ps-sm-2 ps-2">
                  <p className='fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Order Date :<span style={{color:'#BEBCBD'}}> 2 July 2024 2:40 PM </span> </p>
                  <p className='fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Estimated Delivery Date :  <span style={{color:'#BEBCBD'}}> 8 July 2024 </span> </p>
                </div>
                <div className="col-6 text-end pe-xxl-3 pe-xl-3 pe-lg-3 pe-ms-2 pe-sm-2 pe-2">
                  <p className='fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Order Status :  <span style={{color:'#BEBCBD'}}> Inprogress </span>  </p>
                  <p className='fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Payment Method :  <span style={{color:'#BEBCBD'}}> Cash on delivery </span>  </p>
                </div>
              </div>
              <div className={`${styles.details} row mx-0  mb-3`}>
                <div className="col-2  d-flex align-items-center justify-content-start ">
                  <img src={itemMyOrders.src} alt="item" className='img-fluid object-fit-cover'/>
                </div>
                <div className="col-4  d-flex flex-column align-items-start justify-content-center">
                  <h5 className='p-0 m-0 text-start fw-bold fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Black Printed T-shirt </h5>
                  <p className='p-0 m-0 fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6 '>Colour : <span style={{color:'rgba(128, 125, 126, 1)'}}>Pink</span></p>
                  <p className='p-0 m-0 fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Quantity : <span style={{color:'rgba(128, 125, 126, 1)'}}>1</span></p>
                  <p className='fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6 text-start w-100 fw-bold mb-1' style={{color:'rgba(128, 125, 126, 1)'}}>Rs 1700.00</p>
                </div>
                <div className="col-3  d-grid px-0">
                  <button className={`${styles.btn1} btn text-white fs-8 fs-xxl-7 fs-xl-7 fs-lg-7 fs-md-7 fs-sm-7  py-xxl-2 py-xl-2 py-lg-2 py-md-1 py-sm-1 py-1 d-block mx-auto mt-auto mb-xxl-3 mb-xl-3 mb-lg-3 mb-md-3 mb-sm-2 mb-2 w-75 px-0`} style={{background:'#AB5D02'}}>ADD TO CART</button>
                </div>
                <div className="col-3  d-grid px-0">
                  <button className={`${styles.btn1} btn text-white fs-8 fs-xxl-7 fs-xl-7 fs-lg-7 fs-md-7 fs-sm-7  py-xxl-2 py-xl-2 py-lg-2 py-md-1 py-sm-1 py-1 d-block mx-auto mt-auto mb-xxl-3 mb-xl-3 mb-lg-3 mb-md-3 mb-sm-2 mb-2 w-75 px-0`} style={{background:'#AB5D02'}}>REMOVE</button>
                </div>
              </div>
            </div>


            <div className='my-1' style={{border:'3px dotted #AB5D02'}}>

                <div className={`${styles.recipt} row mx-0`} style={{background:'#F6F6F6'}}>
                <p className='fw-bold text-capitalize ps-xxl-3 ps-xl-3 ps-lg-3 ps-ms-2 ps-sm-2 ps-2 fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Order no: #123456789</p>
                  <div className="col-6 ps-xxl-3 ps-xl-3 ps-lg-3 ps-ms-2 ps-sm-2 ps-2">
                    <p className='fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Order Date :<span style={{color:'#BEBCBD'}}> 2 July 2024 2:40 PM </span> </p>
                    <p className='fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Estimated Delivery Date :  <span style={{color:'#BEBCBD'}}> 8 July 2024 </span> </p>
                  </div>
                  <div className="col-6 text-end pe-xxl-3 pe-xl-3 pe-lg-3 pe-ms-2 pe-sm-2 pe-2">
                    <p className='fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Order Status :  <span style={{color:'#BEBCBD'}}> Inprogress </span>  </p>
                    <p className='fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Payment Method :  <span style={{color:'#BEBCBD'}}> Cash on delivery </span>  </p>
                  </div>
                </div>
                <div className={`${styles.details} row mx-0  mb-3`}>
                  <div className="col-2  d-flex align-items-center justify-content-start ">
                      <img src={itemMyOrders.src} alt="item" className='img-fluid object-fit-cover'/>
                    </div>
                    <div className="col-4  d-flex flex-column align-items-start justify-content-center">
                      <h5 className='p-0 m-0 text-start fw-bold fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Black Printed T-shirt </h5>
                      <p className='p-0 m-0 fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6 '>Colour : <span style={{color:'rgba(128, 125, 126, 1)'}}>Pink</span></p>
                      <p className='p-0 m-0 fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Quantity : <span style={{color:'rgba(128, 125, 126, 1)'}}>1</span></p>
                      <p className='fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6 text-start w-100 fw-bold mb-1' style={{color:'rgba(128, 125, 126, 1)'}}>Rs 1700.00</p>
                  </div>
                  <div className="col-3  d-grid px-0">
                      <button className={`${styles.btn1} btn text-white fs-8 fs-xxl-7 fs-xl-7 fs-lg-7 fs-md-7 fs-sm-7  py-xxl-2 py-xl-2 py-lg-2 py-md-1 py-sm-1 py-1 d-block mx-auto mt-auto mb-xxl-3 mb-xl-3 mb-lg-3 mb-md-3 mb-sm-2 mb-2 w-75 px-0`} style={{background:'#AB5D02'}}>ADD TO CART</button>
                    </div>
                    <div className="col-3  d-grid px-0">
                      <button className={`${styles.btn1} btn text-white fs-8 fs-xxl-7 fs-xl-7 fs-lg-7 fs-md-7 fs-sm-7  py-xxl-2 py-xl-2 py-lg-2 py-md-1 py-sm-1 py-1 d-block mx-auto mt-auto mb-xxl-3 mb-xl-3 mb-lg-3 mb-md-3 mb-sm-2 mb-2 w-75 px-0`} style={{background:'#AB5D02'}}>REMOVE</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

      </div>
    </div>
    <div className='row m-2 ' >
      <Footer />
    </div>
  </div>
  )
}

export default MyOrders