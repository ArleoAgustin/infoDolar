import  { useEffect } from 'react';
import { Header } from "../header/Header";
import FooterSimple from "../footer/Footer";
import LayoutsDolars  from "../layouts/LayoutsDolars";
import styles from "./LandigPage.module.css";
import { useTheme } from '../../context/ThemeContext'; 
import ScrollToTopButton from '../Button/ScrollToTopButton';
function LandingPage() {  
 
   // Cambia el atributo `data-theme` del documento según el tema actual
   
   const { theme } = useTheme();
   useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);


  return (
    <>
      <Header />
      
    <div className={styles.pageContent}>
      <LayoutsDolars/>

      </div>
      <ScrollToTopButton />
      <FooterSimple />
    </>
  );
}

export default LandingPage;
