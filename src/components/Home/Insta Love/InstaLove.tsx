import styles from './InstaLove.module.scss';
import React from 'react';
import InstaLoversList from './InstaLoversList';
import Image from 'next/image';
import { useTheme } from '../../ThemeContext';

const InstaLove = () => {
  const {theme} = useTheme();
  return (
    // <div className={`${styles.instaLove} ${theme==='dark' ? styles.darkInstaLove : ''}`}>
    //   <div className={styles.heading}>
    //     <p>instalove</p>
    //     <p><em>@fashionnova</em></p>
    //   </div>

    //   <div className={styles.content}>
    //     {
    //       InstaLoversList.map((item:any)=>{
    //         return(
    //           <ul>
    //             <li>
    //               <Image src={item.id} alt='item' className={styles.item}/>
    //             </li>
    //           </ul>
    //         )
    //       })
    //     }
    //   </div>
    // </div>
    <>
      <h1 className='text-uppercase fs-4 fs-sm-2 fs-md-1 fs-lg-1 fs-xl-1 fs-xxl-1 fw-bold text-center'>instalove</h1>
      <p className='h5 fw-normal text-capitalize mb-4 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5 text-center'><em>@fashionnova</em> </p>

      <div className='col-12 mx-auto d-xxl-flex d-xl-flex d-lg-flex d-none align-items-center justify-content-center ' style={{width:'100%',height:'300px',background:'#F5F5F5'}}>
          {
            InstaLoversList.map((item:any,key:any)=>{
              return(
                <ul className='list-unstyled' key={key}>
                  <li className='px-3'>
                    <Image src={item.id} alt='item' className='img-fluid'/>
                  </li>
                </ul>
              )
            })
          }
      </div>
      
    </>
  )
}

export default InstaLove;
