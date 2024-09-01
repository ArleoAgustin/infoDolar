import styles from "./Card-Dolar.module.css";

interface DatesDolar {
  nombre: string;
  compra: number;
  venta: number;
}

interface DolarProps {
  data: DatesDolar;
  loading: boolean;
  error: string | null;
}

function CardDolar({ data, loading, error }: DolarProps) {

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;
  const handleClick = () => {
  const targetElement = document.getElementById(data.nombre);
    if (targetElement) {
      // Desplazarse al elemento objetivo y centrarlo
      targetElement.scrollIntoView({
        behavior: "smooth",  // Desplazamiento suave
        block: "center",     // Centrar el elemento en la pantalla
      });
    }
  }
  return (
    <>
      <div onClick={handleClick} className={styles.card}>
      <h3
        className={
          data.nombre === 'Contado con liquidación'
            ? `${styles.h3} ${styles.specialH3}`
            : styles.h3
        }
      >
        Dolar {data.nombre}
      </h3>
      <div className={styles.sellBuy}>
        <h5 className={styles.compra}>Compra <span className={styles.span}>${data.compra}</span></h5>
        <h5 className={styles.venta}>Venta <span className={styles.span}>${data.venta}</span></h5>
      </div>
      <p className={styles.verMas}>Presionar para ver detalles</p>
      </div>
    </>
  );
}
export default CardDolar;
