import Carousel from "../../carousel/Carousel";
import { useMediaQuery } from "react-responsive";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import LayoutDesktop from '../../layouts/layoutPriceOfDay/LayoutPriceOfDay'

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
      

      {isMobile ? (
        // Renderiza el carrusel solo si está en un dispositivo móvil
      
        <Carousel data={data} />
      ) : (
        <LayoutDesktop data={data} error={error} loading={loading}/>
      )}
    </>
  );
}

export default PriceOfDay;
