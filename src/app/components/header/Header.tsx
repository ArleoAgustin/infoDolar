import { useMediaQuery } from 'react-responsive';
import Title from './title/Title';
import Icon from './iconHeader/IconHeader';
import style from './Header.module.css';
import SwitchTheme from '../Button/switchTheme/SwitchTheme';
import Calculator from '../calculator/Calculator';
import HamburgerMenu from '../hamburgerMenu/HamburgerMenu';

export function Header() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className={style.containerHeader}>
      <div className={style.iconTitle}>
        <Icon />
        <Title />
      </div>
      {!isMobile ? (
        <div className={style.containerBtn}>
          <Calculator />
          <SwitchTheme />
        </div>
      ) : (
        <HamburgerMenu />
      )}
    </div>
  );
}

export default Header;
