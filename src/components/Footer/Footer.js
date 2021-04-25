import React from 'react';
import style from './Footer.module.scss'
import skype from '../assets/icons/footer/skype.png'
import telegram from '../assets/icons/footer/telegram.png'
import watsapp from '../assets/icons/footer/wats.png'
import footerImg from '../assets/icons/footer/Rectangle_footer.png'
const Footer = () => {
    return (
        <div className={style.footer} id='contacts'>
                <div><a href=''><img src={skype}/></a></div>
                <div><a href=''><img src={telegram}/></a></div>
                <div><a href=''><img src={skype}/></a></div>
        </div>
    );
};

export default Footer;