'use client';

import React, { useState } from 'react';
import { useTheme } from '../../ThemeContext';
import styles from './Slider.module.scss';
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";

const Slider = () => {
  const {theme, toggleTheme} = useTheme();
  // const [darkTheme, setDarkTheme] = useState(false);

  return (
    
    <label className={styles.switch} >
      {theme==='light'?<FaRegMoon onClick={toggleTheme} className={styles.toggleIcon}/>:<MdOutlineWbSunny onClick={toggleTheme} className={styles.toggleIcon}/>}
    </label>

  )
}

export default Slider