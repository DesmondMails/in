import React from 'react';
import style from './Welcome.module.scss'
import first_phone from '../../images/first_phone.png'
import second_phone from '../../images/second_phone.png'
import ellipse from '../../images/ellipses/Ellipse_welcome.png'
import team from '../assets/icons/team.png'
import cycle from '../assets/icons/cycle.png'
import crossPlatform from '../assets/icons/cross-platform.png'
import hands from '../assets/icons/hands.png'
import support from '../assets/icons/support.png'
import solutions from '../assets/icons/solutions.png'
import About from "../About/About";
//<img src={ellipse} alt="ellipse" />
const Welcome = () => {
    return (
        <>
        <div className={style.welcome}>
            <div className={style.ellipse}><img src={ellipse} /></div>
            <div className={style.imgContainer2}>
                <img src={second_phone} alt=""/>
            </div>
            <div className={style.imgContainer1}>
                <img src={first_phone} alt=""/>
            </div>

            <div className={style.textContainer}>
            <div className={style.welcomeText}>
                <h1>Nunc euismod facilisi <br/> volutpat,amet.</h1>
            </div>
            <div className={style.welcomeParagraph}>
                <p>Faucibus feugiat proin odio vel<br/>
                    pharetra ullamcorper ultrices mauris, ut. Elementum.</p>
                <a href = '' className={style.welcomeButton}>let's talk</a>
            </div>
                    {/*<a href = '' className={style.welcomeButton}>let's talk</a>*/}
            </div>

        </div>


            </>
    );
};

export default Welcome;