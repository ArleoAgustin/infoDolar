import CardDolar from "../../card/card-dolar/CardDolar";
import Carousel from "../../carousel/Carousel";
import style from "./PriceOfDay.module.css";
import { useMediaQuery } from "react-responsive";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

interface DatesDolar {
  nombre: string;
  compra: number;
  venta: number;
}

interface DataProps {
  data: DatesDolar[];
  loading: boolean;
  error: string | null;
}

function PriceOfDay({ data, loading, error }: DataProps) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      <h2 className={style.h2}>Cotizaciones del día</h2>

      {isMobile ? (
        // Renderiza el carrusel solo si está en un dispositivo móvil
        <Carousel data={data} />
      ) : (
        <div className={style.containerCards}>
          {data.map((dolar, index) => (
            <CardDolar
              key={index}
              data={dolar}
              loading={loading}
              error={error}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default PriceOfDay;
