import style from './IconHeader.module.css';
import logo from '../../../assets/iconH.png';
import logoLigth from '../../../assets/iconLigth.png';
import { useTheme } from '../../../context/ThemeContext'

function IconHeader() {
  const { theme } = useTheme(); // Usa el contexto para obtener el tema actual

  const scrollToTop = () => {
    window.scrollTo({
      top: -100,
      behavior: 'smooth',
    });
  };

  return (
    <img
      onClick={scrollToTop}
      className={style.img}
      src={theme === 'dark' ? logo : logoLigth} // Usa el valor del tema del contexto
      alt="Logo"
    />
  );
}

export default IconHeader;
