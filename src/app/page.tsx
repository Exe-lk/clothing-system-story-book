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
import { useLogin } from '@/components/LoginContext';
import { useRouter } from 'next/navigation';

export default function Home() {
  const {theme} = useTheme();
  const {isLogIn} = useLogin();
  const router = useRouter()
  return (

      <div className='cotainer-fluid mx-0 h-100'>
        {/* <SideBar/> */}

        {/* <div className='row bg-white m-0 p-xxl-2 d-flex align-items-center justify-content-sm-center justify-content-center justify-content-lg-between justify-content-md-between justify-content-xxl-between justify-content-xl-between p-0  w-100 position-fixed top-0' style={{zIndex:1000}}>
          <Header />
        </div> */}
        {isLogIn===true?router.push('/home') as any:''}

        <div className="row m-0 position-relative">
            <Banner />
        </div>
      

        <div className='row my-xxl-5 my-3 mx-0 p-0'>
          <ShopByCategories />
        </div>

        <div className='row my-3 d-flex align-items-center justify-content-center justify-content-sm-center justify-content-md-around h-100'>
          <NewArrivals />
        </div>

        <div className='row my-3' >
          <Discounts />
        </div>

        <div className='row my-3'>
          <InstaLove />
        </div>

        <div className='row my-5 ' style={{background:'#BFBFBF'}}>
          <Subscribe />
        </div>
        <div className='row m-2'>
          <Footer />
        </div> 
      </div>
  );
}
