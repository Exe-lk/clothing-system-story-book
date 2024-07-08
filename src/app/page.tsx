'use client';

import styles from './page.module.scss';
import Header from "@/components/Home/Header/Header";
import NavBar from "@/components/Home/NavBar/NavBar";
import Banner from "@/components/Home/Banner Area/Banner";
import SideBar from '@/components/Side Bar/SideBar';
import Image from 'next/image';
import banner from '../../public/banner.png';
import rightArrow1 from '../../public/rightArrow1.svg';
import rightArrow2 from '../../public/rightArrow2.svg';
import banner2 from '../../public/banner2.svg';
import ShopByCategories from '@/components/Home/Shop By Categories/ShopByCategories';
import NewArrivals from '@/components/Home/New Arrivals/NewArrivals';
import Discounts from '@/components/Home/Discounts Banner/Discounts';
import InstaLove from '@/components/Home/Insta Love/InstaLove';
import Subscribe from '@/components/Home/SubscribeForm/Subscribe';
import Footer from '@/components/Home/Footer/Footer';

import { useTheme } from '../components/ThemeContext';

export default function Home() {
  const {theme} = useTheme();
  return (
      // <div className={`${styles.home} ${theme==='dark' ? styles.darkHome : ''}`}>
      //   <div className={styles.aside}>
      //     <SideBar/>
      //   </div>
      //   <div className={styles.wrapper}>
      //     <Header/>
      //     <NavBar/>
      //     <Banner/>
      //     <ShopByCategories/>
      //     <NewArrivals/>
      //     <Discounts/>
      //     <InstaLove/>
      //     <Subscribe/>
      //     <Footer/>
      //   </div>
      // </div>
      <div className='mx-0 h-100'>
        {/* <SideBar/> */}

        {/* <div className='row bg-white m-0 p-xxl-2 d-flex align-items-center justify-content-sm-center justify-content-center justify-content-lg-between justify-content-md-between justify-content-xxl-between justify-content-xl-between p-0  w-100 position-fixed top-0' style={{zIndex:1000}}>
          <Header />
        </div> */}

        <div className='row m-2 d-xxl-block d-xl-block d-lg-block d-none' style={{borderBottom:'3px solid #00000029;'}}>
          <NavBar />
        </div>

        <div className="row m-0 position-relative">
            <Banner />
        </div>
      

        <div className='row my-xxl-5 my-3 mx-0 p-0'>
          <ShopByCategories />
        </div>

        <div className='row my-3 d-flex align-items-center justify-content-center justify-content-sm-center justify-content-md-around'>
          <NewArrivals />
        </div>

        <div className='row my-3' >
          <Discounts />
        </div>

        <div className='row my-3'>
          <InstaLove />
        </div>

        <div className='row m-2 p-2 justify-content-between' style={{height:'200px'}}>
          <Subscribe />
        </div>
        <div className='row m-2' style={{height:'500px'}}>
          <Footer />
        </div> 
      </div>
  );
}
