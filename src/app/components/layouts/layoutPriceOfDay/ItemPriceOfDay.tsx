import style from './ItemPrice.module.css'

interface DolarProps {
    nombre: string;
    compra: number;
    venta: number;
  }
  
  interface StatusProps {
    loading: boolean;
    error: string | null;
  }
  
  type Props = DolarProps & StatusProps;
  
  function ItemPriceOfDay({ nombre, compra, venta, loading, error }: Props) {


    
    if (error) {
      return (
        <div>
          <p>Error: {error}</p>
        </div>
      );
    }
  
    if (loading) {
      return (
        <div>
          <p>Cargando datos...</p>
        </div>
      );
    }
  
    return (
      <div className={style.containerInfo}>
        <h4 className={style.h4}>Dólar {nombre}</h4>
        <div className={style.containerSellBuy}>
        <p className={style.venta}>
          Venta <span>${venta}</span>
        </p>
        <p className={style.compra}>
          Compra <span>${compra}</span>
        </p>
        </div>
      </div>
    );
  }
  
  export default ItemPriceOfDay;
  