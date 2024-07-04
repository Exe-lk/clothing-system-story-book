import Header from '@/components/Home/Header/Header';
import NavBar from '@/components/Home/NavBar/NavBar';
import React from 'react';
import aboutus from '../../../public/assets/about us/aboutus.svg';
import ourmission from '../../../public/assets/about us/ourmission.svg';
import emp from '../../../public/assets/about us/emp.png';
import styles from './page.module.scss';
import Footer from '@/components/Home/Footer/Footer';

const page = () => {
  return (
    <div className={`${styles.mainContainer} container-fluid h-100 w-100 m-0 p-0`} >
      
      <div className='row m-2 p-2 justify-content-between' >
        <Header />
      </div>

      <div className='row m-2 d-xxl-block d-xl-block d-lg-block d-none'>
        <NavBar />
      </div>

      <div className={`${styles.banner} row  w-100 mx-xxl-0 mx-2 p-1 position-relative`}>
        <div className={`${styles.details} position-absolute top-0 left-0 p-xxl-5 p-xl-4 p-lg-3 p-md-3 p-sm-3 px-3 mx-xxl-5 mx-xl-3 mx-lg-3 mx-md-3 mx-sm-1 my-1 my-lg-5`}>
          <h1 className='mb-xxl-4 mb-xl-4 mb-lg-4 mb-md-4 mb-sm-3 mb-2 mt-5 fw-bolder' style={{color:'rgba(171, 93, 2, 1)'}}>ABOUT US</h1>
          <p className='text-capitalize fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-7 fs-7'>Our curated collection blends comfort with style, ensuring <br />
          you make a statement effortlessly</p>
        </div>
        <img src={aboutus.src} alt="aboutus" className='img-fluid object-fit-cover mx-0 px-0' />
      </div>

      <div className='row m-xxl-2 m-xl-2 m-lg-2 m-md-2 m-sm-2 m-0 d-flex align-items-center justify-content-center' >
        <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-8 col-sm-9 col-9  p-1  my-xxl-5 my-4 my-sm-5 my-lg-5" >
          <h1 className=' text-capitalize text-center'>our story  </h1>
          <p className='text-center mt-xxl-5 mt-2  fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>

      <div className='row my-2  ms-2 me-0 d-xxl-flex d-xl-flex d-none align-items-center justify-content-end'>
        <div className="col-7 p-1 me-0" style={{background:'rgba(171, 93, 2, 0.2)'}}>
          <h1 className=' text-center text-capitalize pt-5 pb-0'>our Mission</h1>
          <p className='text-center my-5 ps-5 pb-5 pt-2 fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7 '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Mission
          </p>
        </div>
        <div className="col-4 p-1 me-0">
          <img src={ourmission.src} alt="ourmission" className='img-fluid me-0'/>
        </div>
      </div>

      <div className={`${styles.mission} row my-xxl-2 my-xl-2 my-lg-2 my-md-2 my-sm-2 my-1 ms-2 me-2 d-flex d-sm-flex d-lg-flex d-md-flex d-xl-none d-xxl-none flex-column align-items-center justify-content-center`}>
        <h1 className=' text-center text-capitalize pt-xxl-5 pt-xl-5 pt-lg-5 pt-md-4 pt-sm-4 pt-3 pb-0'>our Mission</h1>
        <div className="col-12 p-xxl-3 p-xl-3 p-lg-3 p-md-3 p-sm-2 p-2 me-0 d-flex align-items-center justify-content-center">
          <img src={ourmission.src} alt="ourmission" className='img-fluid me-0'/>
        </div>
        <div className="col-12 p-1" style={{background:'rgba(171, 93, 2, 0.2)'}}>
          <p className='text-center my-5 p-1 fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Mission
          </p>
        </div>
        
      </div>

      <div id="carouselExampleControls" className={`${styles.carsoul} carousel slide row my-5 mx-2  position-relative`} data-bs-ride="carousel">
        <div className={`${styles.carsoulInd} carousel-indicators  p-0 m-0`}>
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
        </div>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active py-4">

            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-lg-7">
                    <div className="card d-flex flex-column align-items-center justify-content-center">
                        <img src={emp.src} className="card-img-top rounded-circle" alt="emp" style={{height:'192px',width:'192px',border:'2px solid rgba(171, 93, 2, 1)'}}/>
                        <div className="card-body">
                          <p className="card-text text-center fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          <h5 className="card-title text-center fw-bold" style={{color:'rgba(171, 93, 2, 1)'}}>Example Name</h5>
                          <p className="card-text text-center">india</p>
                        </div>
                    </div>
                </div>
            </div>

          </div>
          <div className="carousel-item py-4">

            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-lg-7">
                    <div className="card d-flex flex-column align-items-center justify-content-center">
                        <img src={emp.src} className="card-img-top rounded-circle" alt="emp" style={{height:'192px',width:'192px',border:'2px solid rgba(171, 93, 2, 1)'}}/>
                        <div className="card-body">
                          <p className="card-text text-center fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          <h5 className="card-title text-center fw-bold" style={{color:'rgba(171, 93, 2, 1)'}}>Example Name</h5>
                          <p className="card-text text-center">india</p>
                        </div>
                    </div>
                </div>
            </div>

          </div>
          <div className="carousel-item py-4">

            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-lg-7">
                    <div className="card d-flex flex-column align-items-center justify-content-center">
                        <img src={emp.src} className="card-img-top rounded-circle" alt="emp" style={{height:'192px',width:'192px',border:'2px solid rgba(171, 93, 2, 1)'}}/>
                        <div className="card-body">
                          <p className="card-text text-center fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          <h5 className="card-title text-center fw-bold" style={{color:'rgba(171, 93, 2, 1)'}}>Example Name</h5>
                          <p className="card-text text-center">india</p>
                        </div>
                    </div>
                </div>
            </div>

          </div>
          
          
        </div>
        <button className={`${styles.controlBtn} carousel-control-prev`} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className={`${styles.controlBtn} carousel-control-next`} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className='row my-2 ms-2 me-0 d-flex align-items-center justify-content-end'>
        <Footer />
      </div>
    </div>  
  )
}

export default page