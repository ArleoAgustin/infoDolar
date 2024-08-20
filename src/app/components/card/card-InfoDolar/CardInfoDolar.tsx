import FormattedDate from "../../formattedDate/FormatedDate";
import styles from "./CardInfoDolar.module.css";
import DescriptionDolar from "./DescriptionDolar";
import PriceDolar from "./PriceDolar";
import TitleCardInfoDolar from "./TitleCardInfoDolar";
import { useInView } from 'react-intersection-observer';

interface CardInfoProps {
  nombre: string;
  description: string;
  compra: number;
  venta: number;
  fechaActualizacion: string;
}

function CardInfoDolar({ nombre, description, compra, venta, fechaActualizacion }: CardInfoProps) {
  const { ref, inView } = useInView({
    threshold: 0.4, // Ajusta el umbral según tus necesidades
  });

 
  return (
    <div
      ref={ref}
      className={`${styles.card} ${inView ? styles.visible : styles.hidden}`}
    >
      <div className={styles.contentCard}>
        <div className={styles.titleDescription}>
          <div className={styles.title}>
            <TitleCardInfoDolar name={nombre} />
          </div>
          <div className={styles.description}>
            <DescriptionDolar description={description} />
          </div>
        </div>
        <div className={styles.price}>
          <PriceDolar compra={compra} venta={venta} />
        </div>
      </div>
      <span className={styles.span}>
        <FormattedDate fecha={fechaActualizacion} />
      </span>
    </div>
  );
}

export default CardInfoDolar;
