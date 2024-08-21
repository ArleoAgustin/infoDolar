import ApiData from "../Api/ApiDataProvider";
import Card from "../card/card-InfoDolar/CardInfoDolar";
import PriceOfDay from "../section/priceOfDay/PriceOfDay";
import style from "./LayoutDolares.module.css";
import { IconArrowDown,  } from '@tabler/icons-react';


function LayoutsDolars() {



  return (
    <ApiData>
      {(data, loading, error) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error || error}</p>;

        return (
          <>

          <PriceOfDay data={data} loading={loading} error={error}/>


          <div className={style.containerH2}>


            <h2 className={style.h2}>Tipos de cambios en Argentina</h2>
            <IconArrowDown className={style.IconArrowDown}/>
            </div>
            <div className={style.containerCard}>
              {data.map((dolar, index) => (
                <Card
                  key={index}
                  nombre={dolar.nombre}
                  description={dolar.description}
                  fechaActualizacion={dolar.fechaActualizacion}
                  compra={dolar.compra}
                  venta={dolar.venta}
                />
              ))}
            </div>
          </>
        );
      }}
    </ApiData>
  );
}

export default LayoutsDolars;
