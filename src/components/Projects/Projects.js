import React from 'react';
import style from  './Projects.module.scss'
import rectangle_top from '../../images/ellipses/Rectangle _projects_head.png'
import Carousel from "../helpers/Carousel/Carousel";
import leftEllipse from '../../images/ellipses/Ellipse_projects_left.png';
import rightEllipse from '../../images/ellipses/Ellipse_projects_right.png'
import group from '../../images/img_group.png'
import arrowLeft from '../assets/icons/arrowLeft.png'
import arrowRight from '../assets/icons/arrowRight.png'
import firstProj from '../../images/projects/first.png'
import secondProj from '../../images/projects/second.png'
import thirdProj from '../../images/projects/third.png'
const Projects = () => {
    return (
        <div className={style.projects}>
            {/*<div className={style.topImg}><img src={rectangle_top}/></div>*/}
            <div className={style.productHeading}><h2>Our projects</h2></div>
            {/*<div className={style.leftEllipse}></div>*/}
            {/*<div className={style.carouselContainer}>*/}
            {/*    /!*<Carousel />*!/*/}
            {/*</div>*/}

            <div className={style.leftEllipsContainer}>
                <img src={leftEllipse} />
            </div>
            <div className={style.rightEllipsContainer}><img src={rightEllipse}/></div>

            <div className={style.imgGroup}>
                <img src={group}/>
            </div>
            {/*<div className={style.arrows}>*/}
            {/*    <img src={arrowLeft} />*/}
            {/*    <img src={arrowRight}/>*/}
            {/*</div>*/}

        </div>
    );
};

export default Projects;