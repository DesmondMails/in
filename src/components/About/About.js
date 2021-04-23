import React from 'react';
import team from "../assets/icons/team.png";
import cycle from "../assets/icons/cycle.png";
import crossPlatform from "../assets/icons/cross-platform.png";
import hands from "../assets/icons/hands.png";
import support from "../assets/icons/support.png";
import solutions from "../assets/icons/solutions.png";
import style from './About.module.scss'

const About = () => {
    return (
        <div className={style.about}>
            <div className={style.aboutUs}>
                <p>Who we are</p>
            </div>
            <div className={style.preferenceGrid}>
                <div className={style.gridItem}>
                    <img src={team} alt="team"/>
                    <h4>Team of experienced developers.</h4>
                    <p>We develop the best solutions
                        with the help of modern technologies
                        and our profound experience.
                    </p>
                </div>
                <div className={style.gridItem}>
                    <img src={cycle} alt="full dev cycle"/>
                    <h4>A full cycle of mobile app development.</h4>
                    <p>We are creating applications from scratch till
                        you get a completed product
                        on AppStore and Google Play available
                        for the end-user.
                    </p>
                </div>
                <div className={style.gridItem}>
                    <img src={crossPlatform} alt="cross-platform"/>
                    <h4>Cross-platform development.</h4>
                    <p>
                        You will get the app for both
                        iOS and Android platforms.
                    </p>
                </div>
                <div className={style.gridItem}>
                    <img src={hands} alt="hands"/>
                    <h4>5 years on the market of Internet solutions.</h4>
                    <p>
                        Mobile development is
                        our core specialization.
                    </p>
                </div>
                <div className={style.gridItem}>
                    <img src={support} alt="support"/>
                    <h4> Support after release.</h4>
                    <p>
                        We will provide full support
                        even after your app will go live.
                    </p>
                </div>
                <div className={style.gridItem}>
                    <img src={solutions} alt="solutions"/>
                    <h4>We are creating custom solutions.</h4>
                    <p>
                        Our experienced team will implement
                        your best ideas and turn them into value.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;