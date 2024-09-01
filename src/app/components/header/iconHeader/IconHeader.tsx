import { useState, useEffect } from 'react';
import style from './IconHeader.module.css';
import logo from '../../../assets/iconH.png';
import logoLigth from '../../../assets/iconLigth.png';

function IconHeader() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Efecto para escuchar cambios en el tema
  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    setIsDarkMode(currentTheme === 'dark');
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: -100,
      behavior: 'smooth',
    });
  };

  return (
    <img
      onClick={scrollToTop}
      className={style.img}
      src={isDarkMode ? logo : logoLigth}
      alt="Logo"
    />
  );
}

export default IconHeader;
