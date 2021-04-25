import React, {useState} from 'react';
import style from './Navbar.module.scss'
import logo from '../../images/logo.png'
import menu_expand from '../assets/icons/menu_expand.png'
import {Link} from 'react-scroll'
const Navbar = () => {
    const [isExpanded,setIsExpanded] = useState(false);

    return (
        <nav className={style.nav}>
            <div className={style.logo}>
                <img src={logo} alt="logo"/>
            </div>
            <img className={style.expandIcon} src={menu_expand}  onClick={() => setIsExpanded(!isExpanded)}/>
            <ul className={style.menu + " " + isExpanded ? style.expanded : "" }>
                <li><Link to='about' smooth={true} duration={2000}>About</Link></li>
                <li><Link to='video' smooth={true} duration={2000}>How it works</Link></li>
                <li><Link to='projects' smooth={true} duration={2000}>Projects</Link></li>
                <li><Link to='contacts' smooth={true} duration={2000}>Contacts</Link></li>
                <li><Link to='feedback' smooth={true} duration={2000} className={style.navButton}>Let's talk</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;