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

    const handleClick = () => {
      const targetElement = document.getElementById(nombre);
        if (targetElement) {
          // Desplazarse al elemento objetivo y centrarlo
          targetElement.scrollIntoView({
            behavior: "smooth",  // Desplazamiento suave
            block: "center",     // Centrar el elemento en la pantalla
          });
        }
      }

    
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
      <>
      <div onClick={handleClick} className={style.containerInfo}>
        <h4 className={style.h4}>Dólar {nombre}</h4>
        <div className={style.containerSellBuy}>
        <p className={style.venta}>
          Venta <span className={style.span} >${venta}</span>
        </p>
        <p className={style.compra}>
          Compra <span className={style.span} >${compra}</span>
        </p>

        </div>
        <p className={style.verMas}>Presionar para ver detalles</p>
      </div>
      </>
    );
  }
  
  export default ItemPriceOfDay;
  