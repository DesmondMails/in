import style from './Header.module.scss';
import logo from '../../images/logo.png'

const Header = () =>{
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <img src={logo} alt="logo"/>
      </div>
      <div className={style.right_side}>
        <div className={style.menu}>
          <div className={style.menu__item}>About</div>
          <div className={style.menu__item}>How it works</div>
          <div className={style.menu__item}>Projects</div>
          <div className={style.menu__item}>Contacts</div>
          <div className={style.menu__item+ " " + style.menu__button}> Let's talk</div>
        </div>
      </div>
    </header>
  );
}

export default Header;