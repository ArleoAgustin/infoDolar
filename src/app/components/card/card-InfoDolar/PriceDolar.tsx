import style from './PriceDolar.module.css'

interface PriceDolarProps{

    compra : number;
    venta : number;
}


function PriceDolar({compra, venta}: PriceDolarProps){

    return(
        <>
        <div className={style.containerPrices}>
        <h5 className={style.compra}>Compra <span className={style.span}>${compra}</span></h5>
        <h5 className={style.venta}>Venta <span className={style.span}>${venta}</span></h5>
        </div>
        </>
    )
}

export default PriceDolar