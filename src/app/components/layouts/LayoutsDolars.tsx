import ApiData from "../Api/ApiDataProvider";
import Card from "../card/card-InfoDolar/CardInfoDolar";
import style from "./LayoutDolares.module.css";

function LayoutsDolars() {
  return (
    <ApiData>
      {(data, loading, error) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error || error}</p>;

        return (
          <>
            <h2 className={style.h2}>Tipos de cambios en Argentina</h2>

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
