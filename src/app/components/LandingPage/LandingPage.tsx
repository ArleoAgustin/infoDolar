import { useState, useEffect } from 'react';
import { Header } from "../header/Header";
import FooterSimple from "../footer/Footer";
import LayoutsDolars from "../layouts/LayoutsDolars";
import styles from "./LandigPage.module.css";
import { useTheme } from '../../context/ThemeContext'; 
import ScrollToTopButton from '../Button/ScrollToTopButton';
import Loader from '../loader/Loader';

function LandingPage() {
  const [loading, setLoading] = useState(true);  // Estado para el loading
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    // Simula un retraso de carga con setTimeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // 2 segundos de carga

    return () => clearTimeout(timer); // Limpia el timer al desmontar el componente
  }, [theme]);

  if (loading) {
    return <Loader/>  // Muestra el loader mientras está cargando
  }

  return (
    <>
      <Header />
      <div className={styles.pageContent}>
        <LayoutsDolars />
      </div>
      <ScrollToTopButton />
      <FooterSimple />
    </>
  );
}

export default LandingPage;
