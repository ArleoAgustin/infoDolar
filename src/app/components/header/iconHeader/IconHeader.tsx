import style from './IconHeader.module.css'
import logo from '../../../assets/iconH.png'
function IconHeader(){

    return(
        <>
        <img className={style.img} src={logo} />
        </>
    )
}

export default IconHeader;