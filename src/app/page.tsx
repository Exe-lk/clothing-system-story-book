'use client';

import styles from './page.module.scss';
import Header from "@/components/Header/Header";
import NavBar from "@/components/NavBar/NavBar";
import Banner from "@/components/Banner Area/Banner";
import ShopByCategories from '@/components/Shop By Categories/ShopByCategories';
import NewArrivals from '@/components/New Arrivals/NewArrivals';
import Discounts from '@/components/Discounts Banner/Discounts';
import InstaLove from '@/components/Insta Love/InstaLove';
import Subscribe from '@/components/SubscribeForm/Subscribe';
import Footer from '@/components/Footer/Footer';
import { useTheme } from '../components/ThemeContext';

export default function Home() {
  const {theme} = useTheme();
  return (
      <div className={`${styles.home} ${theme==='dark' ? styles.darkHome : ''}`}>
        <Header/>
        <NavBar/>
        <Banner/>
        <ShopByCategories/>
        <NewArrivals/>
        <Discounts/>
        <InstaLove/>
        <Subscribe/>
        <Footer/>
      </div>
  );
}
