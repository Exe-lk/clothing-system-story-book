'use client';
import styles from './Kids.module.scss';
import { collectionList } from './KidsCollection';
import React from 'react';
import { useTheme } from '@/components/ThemeContext';

const Kids = () => {
  const {theme} = useTheme();
  return (
    <div className='row text-capitalize p-1 mx-1 my-3 '>
      <div className="col-12">
        <p className='fs-xxl-5 fs-xl-6 fs-lg-6 fw-bold'>{`kid's (5123)`}</p>
        <ul className='list-unstyled ' style={{color: 'rgba(105, 105, 105, 1)'}}>
          {
            collectionList.map((item:any,key:any)=>{
              return(
                <li className='px-xxl-4 px-xl-3 px-lg-2 py-1 w-100 fs-xxl-6 fs-xl-6 fs-lg-7 fs' key={key}>{item.item}</li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Kids