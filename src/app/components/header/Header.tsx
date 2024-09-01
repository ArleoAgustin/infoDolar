import Title from "./title/Title";
import Icon from './iconHeader/IconHeader'
import style from './Header.module.css'
import SwitchTheme from "../Button/switchTheme/SwitchTheme";
export function Header() {


  return (
    <>
    <div className={style.containerHeader}>
    <div  className={style.iconTitle}>
    <Icon />  
    <Title/>
    </div>
    <SwitchTheme/>
    
    </div>
    </>
  );
}