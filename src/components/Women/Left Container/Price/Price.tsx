import styles from './Price.module.scss';
import React from 'react';

const Price = () => {
  return (
    // <div className={styles.price}>
    //   <p className={styles.priceTitle}>price</p>
    //   <input type="range" className={styles.range}/>
    //   <p className={styles.priceFilter}>rs : <span><input type="text" name="" id="" /> - <input type="text" name="" id="" /></span></p>
    // </div>

    <div className='row text-capitalize p-1 m-1 bg-info'>
      <div className="col-12">
        <p className='text-capitalize fs-xxl-5 fs-xl-6 fs-lg-6 fw-bold'>price</p>
        <div className='px-4 py-1'>
          <input type="range" className='my-1 w-100'/>
          <p className='text-uppercase my-1 fs-xxl-6 fs-xl-6 fs-lg-7 ms-5 ms-sm-4 ms-md-4 ms-xxl-2 ms-xl-2 ms-lg-2'>
            rs : 
            <span>
              <input type="text" className='rounded border-1 w-25' style={{width: '100px'}} /> - <input type="text" className='rounded border-1 w-25' style={{width: '100px'}} />
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Price