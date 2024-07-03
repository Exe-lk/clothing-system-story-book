import Header from '@/components/Home/Header/Header';
import NavBar from '@/components/Home/NavBar/NavBar';
import React from 'react';
import styles from './page.module.scss';
import item from '../../../../public/assets/wishlist/wishlist.png';
import Footer from '@/components/Home/Footer/Footer';

const page = () => {
  return (
    <div className="container-fluid h-100">
      <div className='row m-2 p-2 justify-content-between w-100'>
        <Header />
      </div>

      <div className='row m-2 ' >
        <NavBar />
      </div>

      <div className='row m-2 '>
        <nav aria-label="breadcrumb" className=' my-auto'>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/" className='text-decoration-none' style={{color: 'rgba(0, 0, 0, 0.35)'}}>Home</a></li>
            <li className="breadcrumb-item"><a href="/mens" className='text-decoration-none' style={{color: 'rgba(0, 0, 0, 0.35)'}}>My Account</a></li>
            <li className="breadcrumb-item active" aria-current="page">Wishlist</li>
          </ol>
        </nav>
      </div>

      <div className='row m-xxl-2 m-xl-2 m-lg-2 m-md-0 m-sm-1 m-0 p-2'>
        <div className={`${styles.heading} col-12 d-xxl-none d-xl-none d-lg-none d-md-none d-sm-block d-block text-center`}>
          <h3 className='position-relative fw-bold'>Hello Jhanvi</h3>
          <p>Welcome to your Account</p>
        </div>
        <div className={`${styles.left} col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12  m-xxl-1 m-xl-1 m-lg-1 m-md-1 m-sm-0 m-0 p-xxl-1 p-xl-1 p-lg-1 p-md-1 p-sm-0 p-0 `}>
          <div className={`${styles.heading} row d-xxl-block d-xl-block d-lg-block d-md-block d-sm-none d-none  mx-0 position-relative`}>
            <h3 className='position-relative'>Hello Jhanvi</h3>
            <p>Welcome to your Account</p>
          </div>
          <div className={`${styles.menu} row mx-0`}>
            <ul className='list-group flex-row flex-xxl-column flex-xl-column flex-lg-column flex-md-column flex-sm-row justify-content-between justify-content-sm-evenly'>
              <li className='list-group-item border-0 my-2 text-sm-center text-center text-xxl-start text-xl-start text-lg-start text-md-start fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6' style={{color:'rgba(128, 125, 126, 1)'}}><i className="bi bi-bag-check d-block d-xxl-inline d-xl-inline d-lg-inline d-md-inline d-sm-block  pe-xxl-3 pe-xl-3 pe-lg-3 pe-md-3 pe-sm-3 pe-0 "></i>My orders</li>
              <li className='list-group-item border-0 my-2 position-relative text-sm-center text-center text-xxl-start text-xl-start text-lg-start text-md-start fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6' style={{color:'rgba(128, 125, 126, 1)'}}><i className="bi bi-heart pe-xxl-3 pe-xl-3 pe-lg-3 pe-md-3 pe-sm-3 pe-0 d-block d-xxl-inline d-xl-inline d-lg-inline d-md-inline d-sm-block"></i>Wishlist</li>
              <li className='list-group-item border-0 my-2 text-sm-center text-center text-xxl-start text-xl-start text-lg-start text-md-start fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6' style={{color:'rgba(128, 125, 126, 1)'}}><i className="bi bi-person pe-xxl-3 pe-xl-3 pe-lg-3 pe-md-3 pe-sm-3 pe-0 d-block d-xxl-inline d-xl-inline d-lg-inline d-md-inline d-sm-block"></i>My info</li>
              <li className='list-group-item border-0 my-2 text-sm-center text-center text-xxl-start text-xl-start text-lg-start text-md-start fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6' style={{color:'rgba(128, 125, 126, 1)'}}><i className="bi bi-box-arrow-right pe-xxl-3 pe-xl-3 pe-lg-3 pe-md-3 pe-sm-3 pe-0 d-block d-xxl-inline d-xl-inline d-lg-inline d-md-inline d-sm-block"></i>Sign out</li>
            </ul>
          </div>
        </div>
        <div className={`${styles.right} col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12  m-xxl-1 m-xl-1 m-lg-1 m-md-1 m-sm-0 m-0 p-xxl-1 p-xl-1 p-lg-1 p-md-1 p-sm-0 p-0`}>
          <div className="row mx-0">
            <h4 className='position-relative'>Wishlist</h4>
          </div>
          <div className={`${styles.items} row mx-0 `}>
            <ul className='list-group'>

              <li className='list-group-item d-flex justify-content-between m-0 '>
                <div className="col-1 btn  my-auto fs-4 align-items-center justify-content-between  d-none d-sm-none d-xxl-flex d-xl-flex d-lg-flex d-md-flex">
                  <i className="bi bi-x"></i>
                </div>
                <div className="col-2  d-flex align-items-center justify-content-center ">
                  <img src={item.src} alt="item" className='img-fluid'/>
                </div>
                <div className="col-4  d-flex flex-column align-items-start justify-content-between ">
                  <h5 className='p-0 m-0 text-start fw-bold fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Blue Flower Print Crop Top </h5>
                  <p className='p-0 m-0 fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Color : <span style={{color:'rgba(128, 125, 126, 1)'}}>Yellow</span></p>
                  <p className='p-0 m-0 fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Quantity : <span style={{color:'rgba(128, 125, 126, 1)'}}>1</span></p>
                </div>

                <div className={`${styles.priceAndBtn} col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-5 col-5  d-xxl-flex d-xl-flex d-lg-flex d-md-flex align-items-xxl-center align-items-xl-center align-items-lg-center align-items-md-center`}>
                  <div className="row mx-0 w-100 ">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                      <p className='m-xxl-0 m-xl-0 m-lg-0 m-md-0 m-sm-1 m-1 fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6 text-center w-100' style={{color:'rgba(128, 125, 126, 1)'}}>Rs 1700.00</p>
                    </div>
                    <div className={`${styles.btnContainer} col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 d-flex align-items-center justify-content-between`}>
                      <button className={`${styles.btn1} btn text-white fs-7  py-xxl-2 py-xl-2 py-lg-2 py-md-2 py-sm-1 py-1`} style={{background:'rgba(138, 51, 253, 1)'}}>ADD TO CART</button>
                      <i className={`${styles.btn2} bi bi-x btn btn-danger px-1 py-0 d-block d-sm-block d-xxl-none d-xl-none d-lg-none d-md-none`}></i>
                    </div>
                    
                  </div>
                </div>
              </li>

              <li className='list-group-item d-flex justify-content-between m-0 '>
                <div className="col-1 btn  my-auto fs-4 align-items-center justify-content-between  d-none d-sm-none d-xxl-flex d-xl-flex d-lg-flex d-md-flex">
                  <i className="bi bi-x"></i>
                </div>
                <div className="col-2  d-flex align-items-center justify-content-center ">
                  <img src={item.src} alt="item" className='img-fluid'/>
                </div>
                <div className="col-4  d-flex flex-column align-items-start justify-content-between ">
                  <h5 className='p-0 m-0 text-start fw-bold fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Blue Flower Print Crop Top </h5>
                  <p className='p-0 m-0 fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Color : <span style={{color:'rgba(128, 125, 126, 1)'}}>Yellow</span></p>
                  <p className='p-0 m-0 fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Quantity : <span style={{color:'rgba(128, 125, 126, 1)'}}>1</span></p>
                </div>

                <div className={`${styles.priceAndBtn} col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-5 col-5  d-xxl-flex d-xl-flex d-lg-flex d-md-flex align-items-xxl-center align-items-xl-center align-items-lg-center align-items-md-center`}>
                  <div className="row mx-0 w-100 ">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                      <p className='m-xxl-0 m-xl-0 m-lg-0 m-md-0 m-sm-1 m-1 fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6 text-center w-100' style={{color:'rgba(128, 125, 126, 1)'}}>Rs 1700.00</p>
                    </div>
                    <div className={`${styles.btnContainer} col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 d-flex align-items-center justify-content-between`}>
                      <button className={`${styles.btn1} btn text-white fs-7  py-xxl-2 py-xl-2 py-lg-2 py-md-2 py-sm-1 py-1`} style={{background:'rgba(138, 51, 253, 1)'}}>ADD TO CART</button>
                      <i className={`${styles.btn2} bi bi-x btn btn-danger px-1 py-0 d-block d-sm-block d-xxl-none d-xl-none d-lg-none d-md-none`}></i>
                    </div>
                    
                  </div>
                </div>
              </li>
              
              <li className='list-group-item d-flex justify-content-between m-0 '>
                <div className="col-1 btn  my-auto fs-4 align-items-center justify-content-between  d-none d-sm-none d-xxl-flex d-xl-flex d-lg-flex d-md-flex">
                  <i className="bi bi-x"></i>
                </div>
                <div className="col-2  d-flex align-items-center justify-content-center ">
                  <img src={item.src} alt="item" className='img-fluid'/>
                </div>
                <div className="col-4  d-flex flex-column align-items-start justify-content-between ">
                  <h5 className='p-0 m-0 text-start fw-bold fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Blue Flower Print Crop Top </h5>
                  <p className='p-0 m-0 fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Color : <span style={{color:'rgba(128, 125, 126, 1)'}}>Yellow</span></p>
                  <p className='p-0 m-0 fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Quantity : <span style={{color:'rgba(128, 125, 126, 1)'}}>1</span></p>
                </div>

                <div className={`${styles.priceAndBtn} col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-5 col-5  d-xxl-flex d-xl-flex d-lg-flex d-md-flex align-items-xxl-center align-items-xl-center align-items-lg-center align-items-md-center`}>
                  <div className="row mx-0 w-100 ">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                      <p className='m-xxl-0 m-xl-0 m-lg-0 m-md-0 m-sm-1 m-1 fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6 text-center w-100' style={{color:'rgba(128, 125, 126, 1)'}}>Rs 1700.00</p>
                    </div>
                    <div className={`${styles.btnContainer} col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 d-flex align-items-center justify-content-between`}>
                      <button className={`${styles.btn1} btn text-white fs-7  py-xxl-2 py-xl-2 py-lg-2 py-md-2 py-sm-1 py-1`} style={{background:'rgba(138, 51, 253, 1)'}}>ADD TO CART</button>
                      <i className={`${styles.btn2} bi bi-x btn btn-danger px-1 py-0 d-block d-sm-block d-xxl-none d-xl-none d-lg-none d-md-none`}></i>
                    </div>
                    
                  </div>
                </div>
              </li>

              

            </ul>
          </div>
        </div>
      </div>

      <div className='row m-2 ' >
        <Footer />
      </div>
    </div>
  )
}

export default page