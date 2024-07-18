import Link from 'next/link';
import React from 'react';
import styles from './LeftMenu.module.scss';
import Swal from 'sweetalert2';

const LeftMenu = () => {
  return (
        <div className={`${styles.left} col-xxl-2 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12  m-xxl-1 m-xl-1 m-lg-1 m-md-0 m-sm-0 m-0 p-xxl-1 p-xl-1 p-lg-1 p-md-0 p-sm-0 p-0 `}>
          <div className={`${styles.heading} row d-xxl-block d-xl-block d-lg-block d-md-none d-sm-none d-none  mx-0 position-relative`}>
            <h3 className='position-relative'>Hello Jhanvi</h3>
            <p>Welcome to your Account</p>
          </div>
          <div className={`${styles.menu} row mx-0`}>
            <ul className='list-group flex-row flex-xxl-column flex-xl-column flex-lg-column flex-md-row flex-sm-row justify-content-sm-center justify-content-center p-0 rounded-0'>

            <Link className='text-decoration-none mx-md-3 mx-sm-2 mx-1' href='myorders'>
                <li className='list-group-item btn col-md-3 col-sm-3 col-3 col-xxl-12 col-xl-12 col-lg-12 border-0 my-2  text-sm-center text-center text-xxl-start text-xl-start text-lg-start text-md-center fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6 w-100' style={{color:'rgba(128, 125, 126, 1)'}} ><i className="bi bi-bag-check d-block d-xxl-inline d-xl-inline d-lg-inline d-md-block d-sm-block  pe-xxl-3 pe-xl-3 pe-lg-3 pe-md-3 pe-sm-3 pe-0 "></i>My orders</li>
              </Link>
              
              <Link className='text-decoration-none mx-md-3 mx-sm-2 mx-1' href='wishlist'>
                <li className='list-group-item btn col-md-3 col-sm-3 col-3 col-xxl-12 col-xl-12 col-lg-12 border-0 my-2  text-sm-center text-center text-xxl-start text-xl-start text-lg-start text-md-center fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6 w-100' style={{color:'rgba(128, 125, 126, 1)'}} ><i className="bi bi-heart pe-xxl-3 pe-xl-3 pe-lg-3 pe-md-3 pe-sm-3 pe-0 d-block d-xxl-inline d-xl-inline d-lg-inline d-md-block d-sm-block"></i>Wishlist</li>
              </Link>
              
              <Link className='text-decoration-none mx-md-3 mx-sm-2 mx-1' href='myinfo'>
                <li className='list-group-item btn col-md-3 col-sm-3 col-3 col-xxl-12 col-xl-12 col-lg-12 border-0 my-2  text-sm-center text-center text-xxl-start text-xl-start text-lg-start text-md-center fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6 w-100' style={{color:'rgba(128, 125, 126, 1)'}} ><i className="bi bi-person pe-xxl-3 pe-xl-3 pe-lg-3 pe-md-3 pe-sm-3 pe-0 d-block d-xxl-inline d-xl-inline d-lg-inline d-md-block d-sm-block"></i>My info</li>
              </Link>
            
              <Link className='text-decoration-none mx-md-3 mx-sm-2 mx-1' href='#'>
                <li className='list-group-item btn col-md-3 col-sm-3 col-3 col-xxl-12 col-xl-12 col-lg-12 border-0 my-2  text-sm-center text-center text-xxl-start text-xl-start text-lg-start text-md-center fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6 w-100' style={{color:'rgba(128, 125, 126, 1)'}} onClick={()=>{
                  Swal.fire({
                    text: "Do you want to sign out?",
                    showCancelButton: true,
                    confirmButtonColor: "red",
                    cancelButtonColor: "#AB5D02",
                    confirmButtonText: "Sign out",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire({
                        text: "Signed out successfully..",
                      });
                    }
                  });
                }}><i className="bi bi-box-arrow-right pe-xxl-3 pe-xl-3 pe-lg-3 pe-md-3 pe-sm-3 pe-0 d-block d-xxl-inline d-xl-inline d-lg-inline d-md-block d-sm-block"></i>Sign out</li>
              </Link>

            </ul>
          </div>
        </div>
  )
}

export default LeftMenu