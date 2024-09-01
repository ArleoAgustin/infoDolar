import { useState, useEffect } from 'react';
import style from './SwitchTheme.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function SwitchTheme() {
  // Inicializar isDarkMode como true para el modo oscuro por defecto
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Cambiar el tema al montar el componente
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
  };

  return (
    <div className={style.switchContainer}>
      <input 
        type="checkbox" 
        id="switch" 
        checked={isDarkMode} 
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
