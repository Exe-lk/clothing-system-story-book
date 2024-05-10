import styles from './Footer.module.scss';
import React from 'react'
import Image from 'next/image';
import facebook from '../../../public/assets/footer/facebook.svg';
import tiktok from '../../../public/assets/footer/tiktok.svg';
import instagram from '../../../public/assets/footer/instagram.svg';
import mailOrCall from '../../../public/assets/footer/mailOrCall.svg';
import mainHeading from '../../../public/mainHeading.svg';
import footerSubHeading from '../../../public/assets/footer/footerSubHeading.svg';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.left}>
          <div className={styles.socialize}>
            <p>socialize</p>
            <div className={styles.icons1}>
              <Image src={facebook} alt='facebook' />
              <Image src={tiktok} alt='tiktok' />
              <Image src={instagram} alt='instagram' />
            </div>
          </div>
          <div className={styles.sendMail}>
            <p>SEND AN EMAIL OR CALL</p>
            <div className={styles.icons2}>
              <Image src={mailOrCall} alt='mailOrCall' />
            </div>
          </div>
          <div className={styles.dropBy}>
            <p>drop by</p>
            <p>LORUM IPSUM, LORUM,<br/> Sri Lanka, 10100</p>
          </div>
        </div>
        <div className={styles.middle}>
          <Image src={mainHeading} alt='mainHeading' width={250} className={styles.icon1}/>
          <Image src={footerSubHeading} alt='footerSubHeading'width={210} className={styles.icon2}/>
        </div>
        <div className={styles.right}>
            <p>navigate</p> 
            <div className={styles.content}>
              <div className={styles.left}>
                <a href="#">Home</a>
                <a href="#">woman</a>
                <a href="#">men</a>
              </div>
              <div className={styles.right}>
                <a href="#">kids</a>
                <a href="#">about us</a>
                <a href="#">contact us</a>
              </div>
            </div>

        </div>
      </div>
      <div className={styles.bottom}>
        <p>© Copyright 2024. FASHIONNOVA. All Rights Reserved   EXE.LK </p>
      </div>
    </div>
  )
}

export default Footer