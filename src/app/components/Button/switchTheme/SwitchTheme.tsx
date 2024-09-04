import { useTheme } from '../../../context/ThemeContext'; // Asegúrate de importar la ruta correcta
import style from './SwitchTheme.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function SwitchTheme() {
  const { theme, toggleTheme } = useTheme(); // Usa el contexto para obtener el tema actual y la función para cambiarlo

  return (
    <div className={style.switchContainer}>
      <input 
        type="checkbox" 
        id="switch" 
        checked={theme === 'dark'} 
        onChange={toggleTheme} 
        className={style.input} 
      />
      <label className={style.label} htmlFor="switch">
        <FontAwesomeIcon icon={faSun} className={style.icon} />
        <FontAwesomeIcon icon={faMoon} className={style.icon} />
        <span className={style.ball}></span>
      </label>
    </div>
  );
}

export default SwitchTheme;
