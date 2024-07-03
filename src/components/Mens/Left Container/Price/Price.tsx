import styles from './Price.module.scss';
import React from 'react';

const Price = () => {
  return (
    // <div className={styles.price}>
    //   <p className={styles.priceTitle}>price</p>
    //   <input type="range" className={styles.range}/>
    //   <p className={styles.priceFilter}>rs : <span><input type="text" name="" id="" /> - <input type="text" name="" id="" /></span></p>
    // </div>

    <div className='p-1 m-1'>
      <p className='text-capitalize'>price</p>
      <div className='px-4 py-1'>
        <input type="range" className='my-1'/>
        <p className='text-uppercase my-1' style={{fontSize: '15px'}}>rs : <span><input type="text" className='rounded border-1' style={{width: '100px'}} /> - <input type="text" className='rounded border-1' style={{width: '100px'}} /></span></p>
      </div>
    </div>
  )
}

export default Price