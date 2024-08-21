
import { useState } from 'react';

import styles from './Carousel2.module.css'

interface DatesDolarProps{
    nombre : string;
    venta: number;
    compra: number;
}

interface DataProps {

    data : DatesDolarProps[];
    loading : boolean;
    error: string | null;
}



interface DatesDolarProps {
  nombre: string;
  compra: number;
  venta: number;
}

interface DataProps {
  data: DatesDolarProps[];
}


function Carousel2({ data }: DataProps) {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.carouselContainer}>
      <button className={styles.prevButton} onClick={handlePrev}>
        &#8249; {/* Símbolo de flecha izquierda */}
      </button>

      <div className={styles.carouselContent}>
        {data.map((dolar, index) => (
          <div
            key={index}
            className={`${styles.cardContainer} ${
              index === currentIndex ? styles.active : ''
            }`}
          >
            <h3>{dolar.nombre}</h3>
            <p>Compra: ${dolar.compra}</p>
            <p>Venta: ${dolar.venta}</p>
          </div>
        ))}
      </div>

      <button className={styles.nextButton} onClick={handleNext}>
        &#8250; {/* Símbolo de flecha derecha */}
      </button>
    </div>
  );
}

export default Carousel2;
