import styles from './Heading.module.scss';
import { TfiAlignCenter } from "react-icons/tfi";
import React from 'react';


const Heading = () => {
  return (
    <div className='row text-capitalize p-1 m-1 fs-xxl-5 fs-xl-5 fs-lg-6'>
      <div className="col-6 col-lg-9 d-flex justify-content-between align-items-center">
        <p className='d-block my-auto fw-bold'>all categories</p>
      </div>
      <div className="col-6 col-lg-3 text-end">
        <i className="bi bi-list d-block my-auto"></i>
      </div>
    </div>
  )
}

export default Heading