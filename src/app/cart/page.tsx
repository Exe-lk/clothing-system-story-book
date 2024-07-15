'use client';
import React, {useState} from 'react';
import styles from './page.module.scss';
import NavBar from '@/components/Home/NavBar/NavBar';
import Footer from '@/components/Home/Footer/Footer';
import item1 from '@/../public/assets/wishlist/item.png';
import item2 from '@/../public/assets/wishlist/wishlist.png';

const Cart = () => {
  const [value, setValue] = useState(0);
  return (
    <div className="container-fluid h-100  p-0">

      <div className='row my-3 row d-xxl-block d-xl-block d-lg-block d-none ' >
        <NavBar />
      </div>

      <div className='row mx-1 mx-sm-1 mx-md-1 mx-lg-0 mx-xl-0 mx-xxl-0 my-3 '>
        <nav aria-label="breadcrumb" className=' my-auto'>
          <ol className="breadcrumb fs-7 fs-sm-6 fs-md-5 fs-xxl-5 fs-xl-5 fs-lg-5">
            <li className="breadcrumb-item"><a href="/" className='text-decoration-none' style={{color: 'rgba(0, 0, 0, 0.35)'}}>Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Cart</li>
          </ol>
        </nav>
      </div>

      <div className="row d-sm-block d-block d-xxl-flex d-xl-flex d-lg-flex d-md-block mx-0 info p-xxl-1 p-xl-1 p-lg-1 p-md-1 p-sm-1 p-0  h-100 d-flex justify-content-evenly">
        <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12  p-xxl-2 p-xl-2 p-lg-2 p-md p-sm-1 " style={{border:'2px solid rgba(0, 0, 0, 0.1)'}}>
          
          <div className={`${styles.cartItem} row mx-0 py-2 my-3`} style={{background:'#F6F6F6'}}>
              {/* <div className={`${styles.checkBox} col-1 form-check bg-warning d-flex justify-content-center align-items-center`}> */}
                <input type="checkbox" className={`${styles.checkBox} form-check-input fs-xxl-5 fs-xl-5 fs-lg-6 fs-md-5 fs-sm-5 fs-6 p-0 my-auto mx-xxl-2 mx-xl-2 mx-lg-2 mx-md-2 mx-sm-1 mx-1 rounded-circle`} />
              {/* </div> */}
              <div className="col-2  d-flex align-items-center justify-content-center">
                <img src={item1.src} alt="cartItem1" className='img-fluid object-fit-cover'/>
              </div>
              <div className="col-4 ">
                <h5 className='p-0 m-0 text-start fw-bold fs-7 fs-xxl-5 fs-xl-5 fs-lg-6 fs-md-6 fs-sm-6'>Black Printed T-shirt </h5>
                <p className='p-0 m-0 fs-7 fs-xxl-5 fs-xl-5 fs-lg-6 fs-md-6 fs-sm-6 '>Colour : <span style={{color:'rgba(128, 125, 126, 1)'}}>Pink</span></p>
                <p className='p-0 m-0 fs-7 fs-xxl-5 fs-xl-5 fs-lg-6 fs-md-6 fs-sm-6'>Quantity : <span style={{color:'rgba(128, 125, 126, 1)'}}>1</span></p>
                <p className='fs-7 fs-xxl-5 fs-xl-5 fs-lg-6 fs-md-6 fs-sm-6 text-start w-100 fw-bold mb-1' style={{color:'rgba(128, 125, 126, 1)'}}>Rs 2300.00</p>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-3 col-sm-3 col-4  p-0 d-flex align-items-center justify-content-center">
                <div className="row mx-0 rounded-pill d-flex align-items-center justify-content-between " style={{border: '1px solid rgba(171, 93, 2, 1)'}}>
                        
                  <i className="bi bi-dash w-auto btn p-1 w-auto fs-6 fs-sm-6 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5" onClick={()=>{
                  {value>0? setValue(value-1): 0}
                  }}></i>
                  
                  <input className=' m-0 p-0 bg-transparent border-0 text-center my-auto fs-6 fs-sm-6 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5 w-50' type="text" value={value} min={0} />

                  <i className="bi bi-plus w-auto btn p-1 fs-6 fs-sm-6 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5" onClick={()=>{
                  setValue(value+1)
                  }}></i>
                </div>
              </div>
              <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 col-1  d-flex align-items-center justify-content-xxl-end justify-content-center">
                <i className="bi bi-trash fs-4 btn" style={{color:'red'}}></i>
              </div>
          </div>
          <div className={`${styles.cartItem} row mx-0 py-2 my-3`} style={{background:'#F6F6F6'}}>
              {/* <div className={`${styles.checkBox} col-1 form-check bg-warning d-flex justify-content-center align-items-center`}> */}
                <input type="checkbox" className={`${styles.checkBox} form-check-input fs-xxl-5 fs-xl-5 fs-lg-6 fs-md-5 fs-sm-5 fs-6 p-0 my-auto mx-xxl-2 mx-xl-2 mx-lg-2 mx-md-2 mx-sm-1 mx-1 rounded-circle`} />
              {/* </div> */}
              <div className="col-2  d-flex align-items-center justify-content-center">
                <img src={item1.src} alt="cartItem1" className='img-fluid object-fit-cover'/>
              </div>
              <div className="col-4 ">
                <h5 className='p-0 m-0 text-start fw-bold fs-7 fs-xxl-5 fs-xl-5 fs-lg-6 fs-md-6 fs-sm-6'>Black Printed T-shirt </h5>
                <p className='p-0 m-0 fs-7 fs-xxl-5 fs-xl-5 fs-lg-6 fs-md-6 fs-sm-6 '>Colour : <span style={{color:'rgba(128, 125, 126, 1)'}}>Pink</span></p>
                <p className='p-0 m-0 fs-7 fs-xxl-5 fs-xl-5 fs-lg-6 fs-md-6 fs-sm-6'>Quantity : <span style={{color:'rgba(128, 125, 126, 1)'}}>1</span></p>
                <p className='fs-7 fs-xxl-5 fs-xl-5 fs-lg-6 fs-md-6 fs-sm-6 text-start w-100 fw-bold mb-1' style={{color:'rgba(128, 125, 126, 1)'}}>Rs 2300.00</p>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-3 col-sm-3 col-4  p-0 d-flex align-items-center justify-content-center">
                <div className="row mx-0 rounded-pill d-flex align-items-center justify-content-between " style={{border: '1px solid rgba(171, 93, 2, 1)'}}>
                        
                  <i className="bi bi-dash w-auto btn p-1 w-auto fs-6 fs-sm-6 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5" onClick={()=>{
                  {value>0? setValue(value-1): 0}
                  }}></i>
                  
                  <input className=' m-0 p-0 bg-transparent border-0 text-center my-auto fs-6 fs-sm-6 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5 w-50' type="text" value={value} min={0} />

                  <i className="bi bi-plus w-auto btn p-1 fs-6 fs-sm-6 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5" onClick={()=>{
                  setValue(value+1)
                  }}></i>
                </div>
              </div>
              <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 col-1  d-flex align-items-center justify-content-xxl-end justify-content-center">
                <i className="bi bi-trash fs-4 btn" style={{color:'red'}}></i>
              </div>
          </div>
          <div className={`${styles.cartItem} row mx-0 py-2 my-3`} style={{background:'#F6F6F6'}}>
              {/* <div className={`${styles.checkBox} col-1 form-check bg-warning d-flex justify-content-center align-items-center`}> */}
                <input type="checkbox" className={`${styles.checkBox} form-check-input fs-xxl-5 fs-xl-5 fs-lg-6 fs-md-5 fs-sm-5 fs-6 p-0 my-auto mx-xxl-2 mx-xl-2 mx-lg-2 mx-md-2 mx-sm-1 mx-1 rounded-circle`} />
              {/* </div> */}
              <div className="col-2  d-flex align-items-center justify-content-center">
                <img src={item1.src} alt="cartItem1" className='img-fluid object-fit-cover'/>
              </div>
              <div className="col-4 ">
                <h5 className='p-0 m-0 text-start fw-bold fs-7 fs-xxl-5 fs-xl-5 fs-lg-6 fs-md-6 fs-sm-6'>Black Printed T-shirt </h5>
                <p className='p-0 m-0 fs-7 fs-xxl-5 fs-xl-5 fs-lg-6 fs-md-6 fs-sm-6 '>Colour : <span style={{color:'rgba(128, 125, 126, 1)'}}>Pink</span></p>
                <p className='p-0 m-0 fs-7 fs-xxl-5 fs-xl-5 fs-lg-6 fs-md-6 fs-sm-6'>Quantity : <span style={{color:'rgba(128, 125, 126, 1)'}}>1</span></p>
                <p className='fs-7 fs-xxl-5 fs-xl-5 fs-lg-6 fs-md-6 fs-sm-6 text-start w-100 fw-bold mb-1' style={{color:'rgba(128, 125, 126, 1)'}}>Rs 2300.00</p>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-3 col-sm-3 col-4  p-0 d-flex align-items-center justify-content-center">
                <div className="row mx-0 rounded-pill d-flex align-items-center justify-content-between " style={{border: '1px solid rgba(171, 93, 2, 1)'}}>
                        
                  <i className="bi bi-dash w-auto btn p-1 w-auto fs-6 fs-sm-6 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5" onClick={()=>{
                  {value>0? setValue(value-1): 0}
                  }}></i>
                  
                  <input className=' m-0 p-0 bg-transparent border-0 text-center my-auto fs-6 fs-sm-6 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5 w-50' type="text" value={value} min={0} />

                  <i className="bi bi-plus w-auto btn p-1 fs-6 fs-sm-6 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5" onClick={()=>{
                  setValue(value+1)
                  }}></i>
                </div>
              </div>
              <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 col-1  d-flex align-items-center justify-content-xxl-end justify-content-center">
                <i className="bi bi-trash fs-4 btn" style={{color:'red'}}></i>
              </div>
          </div>
          
        </div>
        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 p-3 fs-7" style={{border:'2px solid rgba(0, 0, 0, 0.1)'}}>
          <h5 className='text-capitalize p-0 fs-xxl-4 fs-xl-4 fs-lg-4 fs-md-4 fs-sm-5 fs-5 fw-bold'>order summery</h5>

          <div className="row  d-flex justify-content-evenly my-3">
            <div className="col-3 ">
              <img src={item1.src} alt="cartItem1" className='img-fluid w-50 d-block mx-auto'/>
            </div>            
            <div className="col-5  d-flex flex-column justify-content-center align-items-start">
              <div className="row">
                <p className='p-0 m-0'>Blue Flower Print Crop Top <span style={{color:'rgba(128, 125, 126, 1)'}}>x 1</span></p>
              </div>
              <div className="row">
                <p className='p-0 m-0'>Color : <span style={{color:'rgba(128, 125, 126, 1)'}}>Yellow</span></p>
              </div>
            </div>            
            <div className="col-3  m-auto">
              <p className='m-auto' style={{color:'rgba(128, 125, 126, 1)'}}>1700.00</p>
            </div>            
          </div>

          <div className="row  d-flex justify-content-evenly my-3">
            <div className="col-3 ">
              <img src={item2.src} alt="cartItem1" className='img-fluid w-50 d-block mx-auto'/>
            </div>            
            <div className="col-5  d-flex flex-column justify-content-center align-items-start">
              <div className="row">
                <p className='p-0 m-0'>Levender Hoodie  <span style={{color:'rgba(128, 125, 126, 1)'}}>x 2</span></p>
              </div>
              <div className="row">
                <p className='p-0 m-0'>Color : <span style={{color:'rgba(128, 125, 126, 1)'}}>Levender</span></p>
              </div>
            </div>            
            <div className="col-3  m-auto">
              <p className='m-auto' style={{color:'rgba(128, 125, 126, 1)'}}>2500.00</p>
            </div>            
          </div>


          <div className="row info d-flex align-items-center justify-content-between ">
            <div className="col-12">

              <div className="row mx-0">
                <div className="col-7">
                  <h6 className='fw-bold ps-md-5 fs-6 fs-sm-6 fs-md-6 fs-lg-6 fs-xl-5 fs-xxl-5'>Subtotal <span style={{color:'rgba(128, 125, 126, 1)'}}>( 2 items )</span> </h6>
                </div>
                <div className="col-5 col-md-3 ms-md-3">
                  <h6 className='fw-bold ps-md-5  m-auto text-center fs-6 fs-sm-6 fs-md-6 fs-lg-6 fs-xl-5 fs-xxl-5' >8000.00</h6>
                </div>
              </div>

              <div className="row mx-0">
                <div className="col-7">
                  <h6 className='fw-bold ps-md-5 ps-md-5 fs-6 fs-sm-6 fs-md-6 fs-lg-6 fs-xl-5 fs-xxl-5'>Savings </h6>
                </div>
                <div className="col-5 col-md-3 ms-md-3 ">
                  <h6 className='fw-bold ps-md-5 m-auto text-center fs-6 fs-sm-6 fs-md-6 fs-lg-6 fs-xl-5 fs-xxl-5'>1000.00</h6>
                </div>
              </div>

              <div className="row mx-0">
                <div className="col-7">
                  <h6 className='py-1 fw-bold ps-md-5 fs-6 fs-sm-6 fs-md-6 fs-lg-6 fs-xl-5 fs-xxl-5'>Shipping </h6>
                </div>
                <div className="col-5 col-md-3 ms-md-3 ">
                  <h6 className='py-1 fw-bold ps-md-5 m-auto text-center fs-6 fs-sm-6 fs-md-6 fs-lg-6 fs-xl-5 fs-xxl-5'>450.00</h6>
                </div>
              </div>

              <div className="row mx-0">
                <div className="col-7">
                  <h6 className='py-2 fw-bold ps-md-5 fs-6 fs-sm-6 fs-md-6 fs-lg-6 fs-xl-5 fs-xxl-5' style={{color:'rgba(171, 93, 2, 1)'}}>Total </h6>
                </div>
                <div className="col-5 col-md-3 ms-md-3 ">
                  <h6 className='py-2 fw-bold ps-md-5 m-auto text-center fs-6 fs-sm-6 fs-md-6 fs-lg-6 fs-xl-5 fs-xxl-5' style={{color:'rgba(171, 93, 2, 1)'}}>6750.00</h6>
                </div>
              </div>
              
              <div className="row mx-0 d-flex justify-content-center my-3">
                <button className='btn  rounded-1 text-uppercase  text-white fw-bold fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-6 fs-xxl-6 w-50' style={{background:'rgba(171, 93, 2, 1)'}}>checkout</button>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className='row my-3 ' >
        <Footer />
      </div>

    </div>
  )
}

export default Cart