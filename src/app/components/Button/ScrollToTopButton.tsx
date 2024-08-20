import React, { useState, useEffect } from 'react';
import { IconArrowUp } from '@tabler/icons-react'; // Asegúrate de importar el ícono correcto
import styles from './ScrollToTopButton.module.css'; // Importa el archivo de estilos

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Maneja la visibilidad del botón basado en el desplazamiento
  const handleScroll = () => {
    if (window.scrollY > 300) { // Cambia el valor según cuándo quieres que aparezca el botón
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Agrega y limpia el listener del scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: -100,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button className={styles.scrollToTopButton} onClick={scrollToTop}>
          <IconArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
