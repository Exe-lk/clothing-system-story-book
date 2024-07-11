import MainHeading from '@/components/Home/Header/Heading/MainHeading';
import styles from './page.module.scss';
import React from 'react';
import Footer from '@/components/Home/Footer/Footer';
import { FaGooglePay } from "react-icons/fa";
import gpay from '../../../../../public/gpay.svg';
import visa from '../../../../../public/visa.svg';
import paypal from '../../../../../public/paypal.svg';
import paypass from '../../../../../public/paypass.svg';
import cartItem1 from '../../../../../public/assets/mens cloths/item1/1.jpg'
import cartItem2 from '../../../../../public/assets/womens cloths/2.jpg'
import cartItem3 from '../../../../../public/assets/kids cloths/2.jpg'

const MensItemPay = () => {
  return (
    <div className='container-fluname '>
      <div className="row mx-0 p-1 ">
        <div className="col-5  p-1 ms-5">
          <MainHeading />
        </div>
      </div>
      <div className="row d-sm-block d-block d-xxl-flex d-xl-flex d-lg-flex d-md-flex mx-0 info p-1 h-100 d-flex justify-content-evenly">
        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12  p-1 " style={{border:'2px solid rgba(0, 0, 0, 0.1)'}}>
          <form className="row  mx-0 p-2">
            <h5 className='text-capitalize p-0'>delivery details</h5>
            <hr />
            <div className='d-flex align-items-center justify-content-between mt-2 mb-3'>
              <div className='col-5'>
                <label htmlFor='address' className='form-label fs-7 fw-bold'>Street Address*</label><br />
                <input id='address' type="text" placeholder='house number and street name' className='fs-7 w-100 p-2 border-0 rounded-1 form-control' style={{background:'rgba(246, 246, 246, 1)'}}/>
              </div>
              <div className='col-5'>
                <label htmlFor='unit' className='fs-7 fw-bold form-label'>Apt, suite, unit</label><br />
                <input id='unit' type="text" placeholder='apartment, suite, unit, etc. (optional)' className='fs-7 w-100 p-2 border-0 rounded-1 form-control' style={{background:'rgba(246, 246, 246, 1)'}}/>
              </div>
            </div>
            <div className='d-flex align-items-center justify-content-between my-3'>
              <div className='col-3'>
                <label htmlFor='city' className='fs-7 fw-bold form-label'>City*</label><br />
                <input id='city' type="text" placeholder='Town / City' className='fs-7 w-100 p-2 border-0 rounded-1 form-control' style={{background:'rgba(246, 246, 246, 1)'}}/>
              </div>
              <div className='col-3'>
                <label htmlFor='state' className='fs-7 fw-bold form-label'>State*</label><br />
                <input id='state' type="text" placeholder='State' className='fs-7 w-100 p-2 border-0 rounded-1 form-control' style={{background:'rgba(246, 246, 246, 1)'}}/>
              </div>
              <div className='col-3'>
                <label htmlFor='pCode' className='fs-7 fw-bold form-label'>Postal Code*</label><br />
                <input id='pCode' type="text" placeholder='Postal Code' className='fs-7 w-100 p-2 border-0 rounded-1 form-control' style={{background:'rgba(246, 246, 246, 1)'}}/>
              </div>
            </div>
            <div className='my-3'>
              <div className='col-6'>
                <label htmlFor='phone' className='fs-7 fw-bold form-label'>Phone*</label><br />
                <input id='phone' type="text" placeholder='Phone' className='fs-7 w-100 p-2 border-0 rounded-1 form-control' style={{background:'rgba(246, 246, 246, 1)'}}/>
              </div>
            </div>
            
          </form>
          <div className="row mx-0 p-2 my-2 ">
            <h5 className='text-capitalize p-0'>Payment Method</h5>
            <p className='p-0 fs-6'>All transactions are secure and encrypted.</p>

            <form className="col d-flex flex-column align-items-start justify-content-between rounded-1" style={{background:'rgba(246, 246, 246, 9)'}}>
              <div className=' d-flex flex-column align-items-start justify-content-between w-100 border-bottom border-2 py-3'>
                <div className='d-flex align-items-center justify-content-between'>
                  <input type="radio" id='radioCC' name="payment" className='me-3'/>
                  <label htmlFor='radioCC' className='fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-5 fs-sm-6 fs-xs-6'>Credit Card <p className='p-0 m-0 fs-6 form-label'>We accept all major credit cards.</p></label>
                </div>
                
                <div className='row ps-4 mt-2 d-flex align-items-center justify-content-center'>
                  <img src={gpay.src} alt="gpay" className='py-2 btn img-fluid w-25 h-25'/>
                  <img src={visa.src} alt="visa" className='py-2 btn img-fluid w-25 h-25' />
                  <img src={paypal.src} alt="paypal" className='py-2 btn img-fluid w-25 h-25'/>
                  <img src={paypass.src} alt="paypass" className='py-2 btn img-fluid w-25 h-25'/>
                </div>
                <div className='row mt-2 mx-4 d-grid gap-3 ' style={{gridTemplateColumns:'auto auto', placeItems:'center'}}>
                    
                      <input type="text" placeholder='Card number' className=' form-control fs-7  p-2 bor border-1 rounded-1 my-2 ' />
                    
                    
                      <input type="text" placeholder='Name of card' className=' form-control fs-7 fs p-2 bor border-1 rounded-1 my-2 ' />
                    
                    
                      <input type="text" placeholder='Expiration date (MM/YY)' className=' form-control fs-7 p-2 bor border-1 rounded-1 my-2 '/>
                  
                    
                      <input type="password" placeholder='Security Code' className=' form-control fs-7 p-2 bor border-1 rounded-1 my-2'/>
                    
                </div>
              </div>
                

              <div className=' d-flex align-items-center justify-content-start w-100 border-bottom border-2 py-3'>
                <input id='radioCash' type="radio" name="payment" className='me-3' />
                <label htmlFor='radioCash' className='fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-5 fs-sm-6 fs-xs-6'>Cash on delivery <p className='p-0 m-0 fs-6'>Pay with cash upon delivery.</p></label>
              </div>

              <div className=' d-flex align-items-center justify-content-between py-3'>
                <input id='radioPayPal' type="radio" name="payment" className='me-3'/>
                <label htmlFor='radioPayPal' className='fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-5 fs-sm-6 fs-xs-6'>Paypal</label>
              </div>
              
            </form>
          </div>
          <button className='btn rounded-1 text-uppercase d-block me-0 ms-auto text-white fs-7' style={{background:'rgba(171, 93, 2, 1)'}}>pay now</button>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 p-3 fs-7" style={{border:'2px solid rgba(0, 0, 0, 0.1)'}}>
          <h5 className='text-capitalize p-0'>order summery</h5>

          <div className="row  d-flex justify-content-evenly my-3">
            <div className="col-3 ">
              <img src={cartItem1.src} alt="cartItem1" className='img-fluid w-50 d-block mx-auto'/>
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
              <img src={cartItem2.src} alt="cartItem1" className='img-fluid w-50 d-block mx-auto'/>
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

          <div className="row  d-flex justify-content-evenly my-3">
            <div className="col-3 ">
              <img src={cartItem3.src} alt="cartItem1" className='img-fluid w-50 d-block mx-auto'/>
            </div>            
            <div className="col-5  d-flex flex-column justify-content-center align-items-start">
              <div className="row">
                <p className='p-0 m-0'>Black Sweatshirt <span style={{color:'rgba(128, 125, 126, 1)'}}>x 2</span></p>
              </div>
              <div className="row">
                <p className='p-0 m-0'>Color : <span style={{color:'rgba(128, 125, 126, 1)'}}>Black</span></p>
              </div>
            </div>            
            <div className="col-3  m-auto">
              <p className='m-auto' style={{color:'rgba(128, 125, 126, 1)'}}>4000.00</p>
            </div>            
          </div>

          <div className="row info d-flex align-items-center justify-content-between ">
            <div className="col-5 ">
              <h6 className='fw-bold'>Subtotal <span style={{color:'rgba(128, 125, 126, 1)'}}>( 3 items )</span> </h6>
              <h6 className='fw-bold'>Savings </h6>
              <h6 className='py-1 fw-bold'>Shipping </h6>
              <h6 className='py-2 fw-bold'>Total </h6>
            </div>
            <div className="col-4  d-flex flex-column align-items-center">
              <h6 className='fw-bold'>8000.00</h6>
              <h6 className='fw-bold'>1000.00</h6>
              <h6 className='py-1 fw-bold'>450.00</h6>
              <h6 className='py-2 fw-bold'>6750.00</h6>
            </div> 
          </div>
        </div>
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  )
}

export default MensItemPay