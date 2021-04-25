import React, { useState, useEffect } from "react";
import style from  "./TestNav.module.scss";
import { CSSTransition } from "react-transition-group";
import logo from '../../images/logo.png'
import expand from '../assets/icons/menu_expand.png'
import {Link} from 'react-scroll'
import skype from '../../images/mobile/skype_header.png'
import telegram from '../../images/mobile/telega_header.png'
import wattsapp from '../../images/mobile/whats_header.png'

const TestNav = () =>  {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className={style.Header}>
      <img src={logo} className={style.Logo} alt="logo" />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames={style.NavAnimation}
        unmountOnExit
      >
        <nav className={style.Nav}>
                <Link to='about' smooth={true} duration={2000}>About</Link>
                <Link to='video' smooth={true} duration={2000}>How it works</Link>
                <Link to='projects' smooth={true} duration={2000}>Projects</Link>
                <Link to='contacts' smooth={true} duration={2000}>Contacts</Link>
                <Link to='feedback' smooth={true} duration={2000} className={style.navButton}>Let's talk</Link>
                <div className={style.mobileIcons}>
                    <div><a href=''><img src={skype}/></a></div>
                    <div><a href=''><img src={telegram}/></a></div>
                    <div><a href=''><img src={wattsapp}/></a></div>
                </div>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className={style.expand}>
        <img src={expand} />
      </button>
    </header>
  );
}

export default TestNav;