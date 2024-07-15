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

      {/* common header for both pc and mobile views */}
      {/* <h1 className='text-uppercase fs-4 fs-sm-2 fs-md-1 fs-lg-1 fs-xl-1 fs-xxl-1 fw-bold text-center'>shop by categories </h1>
      <p className='h5 fw-normal text-capitalize mb-4 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p> */}

      {/* pc view for SHOP BY CATEGORIES (for lg,xl,xxl sizes) */}
      {/* <div className="col-6 p-1 d-xxl-block d-xl-block d-lg-block d-none" >
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
        <div className="row mx-0 h-50 d-flex align-items-center" >
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
        <div className="row mx-0 h-50 d-flex align-items-center" >
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
      </div> */}
      
      {/* mobile view for SHOP BY CATEGORIES (for xs,sm,md sizes) */}
      {/* <div className={`${styles.image1} col-4 h-100 p-0 d-flex d-sm-flex d-md-flex d-lg-none d-xl-none d-xxl-none align-items-center justify-content-center position-relative`}>
        <img src={forWomen.src} alt='forWomen' className='img-fluid opacity-75'/>
        <div className='row mx-0 px-0 w-50 position-absolute top-0 text-white  h-100 ' >
              <p className='text-capitalize fw-bolder my-auto fs-md-2 fs-sm-3 fs-3'>{`women’s`}</p>
              <ul className='list-unstyled text-capitalize fs-7 fs-md-6 fs-sm-7 d-flex flex-column justify-content-between' >
                <li className={`${styles.button}`}>dresses</li>
                <li className={`${styles.button}`}>sarees</li>
                <li className={`${styles.button}`}>t-shirts and blouses</li>
                <li className={`${styles.button}`}>jackets & coats</li>
                <li className={`${styles.button}`}>jeans</li>
                <li className={`${styles.button}`}>knit</li>
              </ul>
        </div>
      </div>
      <div className={`${styles.image2} col-4 h-100 p-0 d-flex d-sm-flex d-md-flex d-lg-none d-xl-none d-xxl-none align-items-center justify-content-center position-relative`}>
        <img src={forMen.src} alt='forMen' className='img-fluid opacity-75'/>
        <div className='row mx-0 px-0 w-50 position-absolute top-0 text-white  h-100' >
              <p className='text-capitalize fw-bolder my-auto fs-3'>{`men’s`}</p>
              <ul className='list-unstyled text-capitalize fs-7 fs-md-6 fs-sm-7 d-flex flex-column justify-content-between' >
                <li className={`${styles.button}`}>t-shirts & shirts</li>
                <li className={`${styles.button}`}>jeans</li>
                <li className={`${styles.button}`}>jacket & coats</li>
                <li className={`${styles.button}`}>shorts</li>
                <li className={`${styles.button}`}>jeans</li>
                <li className={`${styles.button}`}>knit</li>
              </ul>
        </div>
      </div>
      <div className={`${styles.image3} col-4 h-100 p-0 d-flex d-sm-flex d-md-flex d-lg-none d-xl-none d-xxl-none align-items-center justify-content-center position-relative`}>
        <img src={forKid.src} alt='forKid' className='img-fluid opacity-75'/>
        <div className='row mx-0 px-0 w-50 position-absolute top-0 text-white  h-100' >
              <p className='text-capitalize fw-bolder my-auto fs-3'>{`kid’s`}</p>
              <ul className='list-unstyled text-capitalize fs-7 fs-md-6 fs-sm-7 d-flex flex-column justify-content-between' >
                <li className={`${styles.button}`}>t-shirts & shirts</li>
                <li className={`${styles.button}`}>jeans</li>
                <li className={`${styles.button}`}>jacket & coats</li>
                <li className={`${styles.button}`}>shorts</li>
                <li className={`${styles.button}`}>jeans</li>
                <li className={`${styles.button}`}>knit</li>
              </ul>
        </div>
      </div> */}

      {/* common header for both pc and mobile views */}
      <h1 className='text-uppercase fs-4 fs-sm-2 fs-md-1 fs-lg-1 fs-xl-1 fs-xxl-1 fw-bold text-center'>shop by categories </h1>
      <p className='h5 fw-normal text-capitalize mb-4 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

      {/* pc view for SHOP BY CATEGORIES (for lg,xl,xxl sizes) */}
      <div className="col-4 p-1 d-xxl-block d-xl-block d-lg-block d-none" >
        <div className={`row mx-0 ${styles.flipCardContainer} `}>
          <div className={`${styles.flipCard}`}>

            <div className={`${styles.cardFront}`} >
              <figure className={`${styles.figure}`}>
                <div className={`${styles.imgBg}`}></div>
                <img src={forWomen.src} alt='forWomen' className='img-fluid '/>
                <figcaption className={`${styles.figcaption} text-uppercase fs-xxl-2 fs-xl-2 fs-md-3`}> {`women`}</figcaption>
              </figure>
              
              
            </div>

            <div className={`${styles.cardBack} d-flex justify-content-center align-items-center`}>
              <figure className={`${styles.figure}`}>
                <div className={`${styles.imgBg}`}></div>
                <img src={forWomen.src} alt='forWomen' className='img-fluid opacity-25 '/>
              </figure>

              <ul className='list-unstyled text-capitalize fs-md-6 fs-xxl-5 fs-xl-5 fw-bold d-block my-auto' >
                <li className={`${styles.button}`}>t-shirts & shirts</li>
                <li className={`${styles.button}`}>jeans</li>
                <li className={`${styles.button}`}>jacket & coats</li>
                <li className={`${styles.button}`}>shorts</li>
                <li className={`${styles.button}`}>jeans</li>
                <li className={`${styles.button}`}>knit</li>
              </ul>

              <div className={`${styles.designContainer} `}>
                <span className={`${styles.design} ${styles.design1}`}></span>
                <span className={`${styles.design} ${styles.design2}`}></span>
                <span className={`${styles.design} ${styles.design3}`}></span>
                <span className={`${styles.design} ${styles.design4}`}></span>
                <span className={`${styles.design} ${styles.design5}`}></span>
                <span className={`${styles.design} ${styles.design6}`}></span>
                <span className={`${styles.design} ${styles.design7}`}></span>
                <span className={`${styles.design} ${styles.design8}`}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-4 p-1 d-xxl-block d-xl-block d-lg-block d-none" >
        <div className={`row mx-0 ${styles.flipCardContainer} `}>
          <div className={`${styles.flipCard}`}>

            <div className={`${styles.cardFront}`} >
              <figure className={`${styles.figure}`}>
                <div className={`${styles.imgBg}`}></div>
                <img src={forMen.src} alt='forMen' className='img-fluid '/>
                <figcaption className={`${styles.figcaption} text-uppercase fs-xxl-2 fs-xl-2 fs-md-3`}> {`men`}</figcaption>
              </figure>
              
              
            </div>

            <div className={`${styles.cardBack}`}>
              <figure className={`${styles.figure}`}>
                <div className={`${styles.imgBg}`}></div>
                <img src={forMen.src} alt='forMen' className='img-fluid opacity-25'/>
              </figure>

            <ul className='list-unstyled text-capitalize fs-md-6 fs-xxl-5 fs-xl-5 d-flex flex-column justify-content-between fw-bold'>
              <li className={`${styles.button}`}>t-shirts & shirts</li>
              <li className={`${styles.button}`}>jeans</li>
              <li className={`${styles.button}`}>jacket & coats</li>
              <li className={`${styles.button}`}>shorts</li>
            </ul>

              <div className={`${styles.designContainer}`}>
                <span className={`${styles.design} ${styles.design1}`}></span>
                <span className={`${styles.design} ${styles.design2}`}></span>
                <span className={`${styles.design} ${styles.design3}`}></span>
                <span className={`${styles.design} ${styles.design4}`}></span>
                <span className={`${styles.design} ${styles.design5}`}></span>
                <span className={`${styles.design} ${styles.design6}`}></span>
                <span className={`${styles.design} ${styles.design7}`}></span>
                <span className={`${styles.design} ${styles.design8}`}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-4 p-1 d-xxl-block d-xl-block d-lg-block d-none" >
        <div className={`row mx-0 ${styles.flipCardContainer} `}>
          <div className={`${styles.flipCard}`}>

            <div className={`${styles.cardFront}`} >
              <figure className={`${styles.figure}`}>
                <div className={`${styles.imgBg}`}></div>
                <img src={forKid.src} alt='forKid' className='img-fluid '/>
                <figcaption className={`${styles.figcaption} text-uppercase fs-xxl-2 fs-xl-2 fs-md-3`}> {`kids`}</figcaption>
              </figure>
              
              
            </div>

            <div className={`${styles.cardBack}`}>
              <figure className={`${styles.figure}`}>
                <div className={`${styles.imgBg}`}></div>
                <img src={forKid.src} alt='forKid' className='img-fluid opacity-25 '/>
              </figure>

            <ul className='list-unstyled text-capitalize fs-md-6 fs-xxl-5 fs-xl-5 d-flex flex-column justify-content-between fw-bold'>
              <li className={`${styles.button}`}>t-shirts & shirts</li>
              <li className={`${styles.button}`}>jeans</li>
              <li className={`${styles.button}`}>jacket & coats</li>
              <li className={`${styles.button}`}>shorts</li>
            </ul>

              <div className={`${styles.designContainer}`}>
                <span className={`${styles.design} ${styles.design1}`}></span>
                <span className={`${styles.design} ${styles.design2}`}></span>
                <span className={`${styles.design} ${styles.design3}`}></span>
                <span className={`${styles.design} ${styles.design4}`}></span>
                <span className={`${styles.design} ${styles.design5}`}></span>
                <span className={`${styles.design} ${styles.design6}`}></span>
                <span className={`${styles.design} ${styles.design7}`}></span>
                <span className={`${styles.design} ${styles.design8}`}></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile view for SHOP BY CATEGORIES (for xs,sm,md sizes) */}
      <div className={`${styles.image1} col-4 h-100 p-0 d-flex d-sm-flex d-md-flex d-lg-none d-xl-none d-xxl-none align-items-center justify-content-center position-relative`}>
        <img src={forWomen.src} alt='forWomen' className='img-fluid opacity-75'/>
        <div className='row mx-0 px-0 w-50 position-absolute top-0 text-white  h-100 ' >
              <p className='text-capitalize fw-bolder my-auto fs-md-2 fs-sm-3 fs-3'>{`women’s`}</p>
              <ul className='list-unstyled text-capitalize fs-7 fs-md-6 fs-sm-7 d-flex flex-column justify-content-between' >
                <li className={`${styles.button}`}>dresses</li>
                <li className={`${styles.button}`}>sarees</li>
                <li className={`${styles.button}`}>t-shirts and blouses</li>
                <li className={`${styles.button}`}>jackets & coats</li>
                <li className={`${styles.button}`}>jeans</li>
                <li className={`${styles.button}`}>knit</li>
              </ul>
        </div>
      </div>
      <div className={`${styles.image2} col-4 h-100 p-0 d-flex d-sm-flex d-md-flex d-lg-none d-xl-none d-xxl-none align-items-center justify-content-center position-relative`}>
        <img src={forMen.src} alt='forMen' className='img-fluid opacity-75'/>
        <div className='row mx-0 px-0 w-50 position-absolute top-0 text-white  h-100' >
              <p className='text-capitalize fw-bolder my-auto fs-3'>{`men’s`}</p>
              <ul className='list-unstyled text-capitalize fs-7 fs-md-6 fs-sm-7 d-flex flex-column justify-content-between' >
                <li className={`${styles.button}`}>t-shirts & shirts</li>
                <li className={`${styles.button}`}>jeans</li>
                <li className={`${styles.button}`}>jacket & coats</li>
                <li className={`${styles.button}`}>shorts</li>
                <li className={`${styles.button}`}>jeans</li>
                <li className={`${styles.button}`}>knit</li>
              </ul>
        </div>
      </div>
      <div className={`${styles.image3} col-4 h-100 p-0 d-flex d-sm-flex d-md-flex d-lg-none d-xl-none d-xxl-none align-items-center justify-content-center position-relative`}>
        <img src={forKid.src} alt='forKid' className='img-fluid opacity-75'/>
        <div className='row mx-0 px-0 w-50 position-absolute top-0 text-white  h-100' >
              <p className='text-capitalize fw-bolder my-auto fs-3'>{`kid’s`}</p>
              <ul className='list-unstyled text-capitalize fs-7 fs-md-6 fs-sm-7 d-flex flex-column justify-content-between' >
                <li className={`${styles.button}`}>t-shirts & shirts</li>
                <li className={`${styles.button}`}>jeans</li>
                <li className={`${styles.button}`}>jacket & coats</li>
                <li className={`${styles.button}`}>shorts</li>
                <li className={`${styles.button}`}>jeans</li>
                <li className={`${styles.button}`}>knit</li>
              </ul>
        </div>
      </div>
    </>
  )
}

export default ShopByCategories