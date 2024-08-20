import style from './TitleCardInfoDolar.module.css'

interface TitleProps{

    name : string
}

function TitleCardInfoDolar({name}: TitleProps){

    return(
        <>
        <h2 className={style.h2}>Dolar {name}</h2>
        </>
    )
}

export default TitleCardInfoDolar