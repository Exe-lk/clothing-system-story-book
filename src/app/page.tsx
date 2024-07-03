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

        <div className='row m-2 p-xxl-2 p-0 justify-content-between w-100 bg-danger' >
          <Header />
        </div>

        <div className='row m-2 ' style={{height:'70px'}}>
          <NavBar />
        </div>

        <div className="row m-2 position-relative">
            <Banner />
        </div>
      

        <div className='row m-2 p-2'>
          <ShopByCategories />
        </div>

        <div className='card position-relative row bg-white m-2 p-2 border-0' style={{height:'1300px'}}>
          <NewArrivals />
        </div>

        <div className='row mx-2 my-3' style={{height:'600px'}}>
          <Discounts />
        </div>

        <div className='row m-2 p-1' style={{height:'500px'}}>
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
