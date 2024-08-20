import style from './PriceDolar.module.css'

interface PriceDolarProps{

    compra : number;
    venta : number;
}


function PriceDolar({compra, venta}: PriceDolarProps){

    return(
        <>
        <div className={style.containerPrices}>
        <h5 className={style.compra}>Compra ${compra}</h5>
        <h5 className={style.venta}>Venta ${venta}</h5>
        </div>
        </>
    )
}

export default PriceDolar