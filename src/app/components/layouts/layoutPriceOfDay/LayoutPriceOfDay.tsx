import style from "./LayoutPriceOfDay.module.css";
import Item from "./ItemPriceOfDay";

interface DolarProps {
  nombre: string;
  compra: number;
  venta: number;
}

interface DataProps {
  data: DolarProps[];
  loading: boolean;
  error: string | null;
}

function LayoutPriceOfDay({ data, error, loading }: DataProps) {
  return (
    <div className={style.containerPriceOfDAyDesktop}>

      <div className={style.container}>
        {data.map((dolar, index) => (
          <Item
            loading={loading}
            error={error}
            key={index}
            nombre={dolar.nombre}
            venta={dolar.venta}
            compra={dolar.compra}
          />
        ))}
      </div>
    </div>
  );
}

export default LayoutPriceOfDay;
