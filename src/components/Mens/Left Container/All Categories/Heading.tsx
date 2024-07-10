import styles from './Heading.module.scss';
import { TfiAlignCenter } from "react-icons/tfi";
import React from 'react';


const Heading = () => {
  return (
    <div className='row text-capitalize p-1 m-1 bg-info'>
      <div className="col-6 d-flex justify-content-between align-items-center">
        <p className='d-block my-auto fw-bold'>all categories</p>
      </div>
      <div className="col-6 text-end">
        <i className="bi bi-list d-block my-auto"></i>
      </div>
    </div>
  )
}

export default Heading