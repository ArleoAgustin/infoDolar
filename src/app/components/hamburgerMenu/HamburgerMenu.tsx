import { useState, useRef, useEffect } from 'react';
import style from './HamburgerMenu.module.css';
import Calculator from '../calculator/Calculator';
import SwitchTheme from '../Button/switchTheme/SwitchTheme';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const goToFooter = () => {
    const targetElement = document.getElementById("contacto");
      if (targetElement) {
        // Desplazarse al elemento objetivo y centrarlo
        targetElement.scrollIntoView({
          behavior: "smooth",  // Desplazamiento suave
          block: "center",     // Centrar el elemento en la pantalla
        });
      }
    }

  // Maneja el clic fuera del menú
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Agregar el evento al montar el componente
    document.addEventListener('mousedown', handleClickOutside);

    // Limpiar el evento al desmontar el componente
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={style.menuContainer} ref={menuRef}>
      <button className={style.hamburgerButton} onClick={toggleMenu}>
        <div className={`${style.hamburgerBar} ${isOpen ? style.open : ''}`}></div>
        <div className={`${style.hamburgerBar} ${isOpen ? style.open : ''}`}></div>
        <div className={`${style.hamburgerBar} ${isOpen ? style.open : ''}`}></div>
      </button>
      <nav className={`${style.menu} ${isOpen ? style.open : ''}`}>
        <ul className={style.menuList}>
          <li>
            <Calculator />
          </li>
          <li>
            <h5 className={style.h5} onClick={goToFooter}>Contacto</h5>
          </li>
          <li className={style.switch}>
            <SwitchTheme />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HamburgerMenu;
