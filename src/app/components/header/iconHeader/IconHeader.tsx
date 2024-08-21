import style from './IconHeader.module.css'
import logo from '../../../assets/iconH.png'
function IconHeader(){

    const scrollToTop = () => {
        window.scrollTo({
          top: -100,
          behavior: 'smooth'
        });
      };

    return(
        <>
        <img onClick={scrollToTop} className={style.img} src={logo} />
        </>
    )
}

export default IconHeader;