import style from "./Footer.module.css";
import { IconBrandFacebook, IconBrandInstagram, IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

function Footer() {
  return (
    <div id="contacto" className={style.containerFooter}>
      <div className={style.containerContact}>
        <a className={style.icon}  href="https://www.facebook.com/agustin.arleo/" target="_blank" rel="noopener noreferrer">
          <IconBrandFacebook/>
        </a>
        <a className={style.icon} href="https://www.instagram.com/agustin.arleo/" target="_blank" rel="noopener noreferrer">
          <IconBrandInstagram  />
        </a>
        <a className={style.icon} href="https://github.com/ArleoAgustin" target="_blank" rel="noopener noreferrer">
          <IconBrandGithub  />
        </a>
        <a className={style.icon} href="https://www.linkedin.com/in/agust%C3%ADn-arleo-726071208/" target="_blank" rel="noopener noreferrer">
          <IconBrandLinkedin  />
        </a>
      </div>
      <h4 className={style.h4}>Designed by Agustin Arleo</h4>
    </div>
  );
}

export default Footer;
