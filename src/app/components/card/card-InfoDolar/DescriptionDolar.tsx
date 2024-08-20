import style from './DescriptionDolar.module.css'

interface DescriptionDolarProps{ description: string }

function DescriptionDolar({description}: DescriptionDolarProps){

    return(
        <>
        <p className={style.p}>{description}</p>
        </>
    )
}

export default DescriptionDolar