import styles from './Heading.module.scss';
import { TfiAlignCenter } from "react-icons/tfi";
import React from 'react';


const Heading = () => {
  return (
    // <div className={styles.heading}>
    //   <p>all categories</p>
    //   <TfiAlignCenter />
    // </div>

    <div className='text-capitalize d-flex justify-content-between p-1 m-1
    align-items-center'>
      <p className='my-auto'>all categories</p>
      <TfiAlignCenter />
    </div>
  )
}

export default Heading