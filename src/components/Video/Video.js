import React from 'react';
import style from './Video.module.scss'
import play from '../../images/play.png'
import rectangle_top from "../../images/ellipses/Rectangle _projects_head.png";

const Video = () => {
    return (
        <div className={style.video}>
            <div className={style.playIcon}>
                <img src={play} alt=""/>
            </div>
            {/*<div className={style.topImg}><img src={rectangle_top}/></div>*/}
        </div>
    );
};

export default Video;