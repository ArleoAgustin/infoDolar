import styles from './ImgDescriptionDolar.module.css'

interface ImgProps{

    image: string;

}

function ImgDescriptionDolar({image}: ImgProps){

    return(
        <>
        <img className={styles.img} src={image} alt="" />
        </>
    )
}

export default ImgDescriptionDolar