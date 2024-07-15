'use client';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });
import { ThemeContext } from "@/components/ThemeContext";
import '/node_modules/bootstrap/scss/bootstrap.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '/node_modules/bootstrap/scss/bootstrap-utilities.scss';
import '../../custom.scss';
import "bootstrap-icons/font/bootstrap-icons.css";
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SideBar from '@/components/Side Bar/SideBar';
import './global.css';
import { useEffect } from "react";
import Header from "@/components/Home/Header/Header";
// import styles from '../components/Side Bar/SideBar.module.scss';
const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{theme, toggleTheme:()=>setTheme(theme === 'light'?'dark':'light')}}>
      <html lang="en">
      
        <body className='container-fluid d-flex justify-content-center m-0 p-0 overflow-x-hidden'>

          <aside className="d-xxl-block d-xl-block d-lg-block d-none" style={{width:'70px'}}>
            <SideBar />
          </aside>
          <header className='container-fluid ms-0 ps-0 row bg-white m-0 p-xxl-2 d-flex align-items-center justify-content-sm-center justify-content-center justify-content-lg-around justify-content-md-between justify-content-xxl-around justify-content-xl-around p-0 w-100 position-fixed top-0 bg-white w-100' style={{zIndex:1000,height:'65px'}}>
            <Header />
          </header>
          <main className='container-xl container-xxl container-lg container-fluid-md container-fluid-sm container-fluid p-0 m-0 overflow-y-scroll'>
            <div style={{paddingTop:'65px', overflow:'clip'}}>
              {children}
            </div>
          </main>
   
        </body>
      </html>
    </ThemeContext.Provider>
  );
}
