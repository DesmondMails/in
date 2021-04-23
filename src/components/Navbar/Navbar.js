import React, {useState} from 'react';
import style from './Navbar.module.scss'
import logo from '../../images/logo.png'
import menu_expand from '../assets/icons/menu_expand.png'
const Navbar = () => {
    const [isExpanded,setIsExpanded] = useState(false);

    return (
        <nav className={style.nav}>
            <div className={style.logo}>
                <img src={logo} alt="logo"/>
            </div>
            <img className={style.expandIcon} src={menu_expand}  onClick={() => setIsExpanded(!isExpanded)}/>
            <ul className={style.menu + " " + isExpanded ? style.expanded : "" }>
                <li><a href="">About</a></li>
                <li><a href="">How it works</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contacts</a></li>
                <li><a href="" className={style.navButton}>Let's talk</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;