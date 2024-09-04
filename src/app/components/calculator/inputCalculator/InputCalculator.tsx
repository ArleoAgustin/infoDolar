import style from './InputCalculator.module.css';

interface InputProps {
  nombre: string;
  compra: number;
  venta: number;
}

// Función para formatear números en formato con puntos como separador de miles y coma como separador decimal
const formatNumber = (num: number) => {
  return new Intl.NumberFormat('es-AR').format(num);
};

function InputCalculator({ nombre, compra, venta }: InputProps) {
  return (
    <div className={style.containerInput}>
      <h5 className={style.h5}>Dólar {nombre}</h5>
      <div className={style.sellBuy}>
        <p className={style.p}>Compra <span className={style.span}>{formatNumber(compra)}</span></p>
        <p className={style.p}>Venta <span className={style.span}>{formatNumber(venta)}</span></p>
      </div>
    </div>
  );
}

export default InputCalculator;
