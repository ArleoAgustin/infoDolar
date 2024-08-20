import style from './ButtonTheme.module.css'
import { useTheme } from '../../../context/ThemeContext';
import { IconSun, IconMoon } from '@tabler/icons-react'; // Importa los íconos de Tabler

function ButtonTheme(){
    const { theme, toggleTheme } = useTheme();
    const buttonClass = theme === 'light' ? style.themeToggleButtonLight : style.themeToggleButtonDark;
    return(
        <>
        
<button className={buttonClass} onClick={toggleTheme}>
      {theme === 'light' ? (
        <IconMoon size={18} color="white" /> // Ícono de Luna para el modo oscuro
      ) : (
        <IconSun size={18} color="black" /> // Ícono de Sol para el modo claro
      )}
    </button>
        </>
    )

}

export default ButtonTheme