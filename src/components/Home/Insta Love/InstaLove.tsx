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
      <div className='col-12 bg-white mb-1 text-center d-flex flex-column align-items-center justify-content-center' style={{height:'115px'}}>
        <p className='h1 text-uppercase'>instalove</p>
        <p className='h5 fw-normal text-capitalize mb-4'><em>@fashionnova</em> </p>
      </div>
      <div className='col-12 mx-auto d-flex align-items-center justify-content-center ' style={{width:'100%',height:'300px',background:'#F5F5F5'}}>
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
