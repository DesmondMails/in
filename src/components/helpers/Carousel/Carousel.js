import React, {useState} from 'react'
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from './Carousel.module.scss'
const config = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
};

const products = [
    {
        img: 'https://gmedia.playstation.com/is/image/SIEPDC/ps-app-control-image-block-01-en-13nov20?$native--t$',
        title: 'Dolore magna',
        text: 'Lorem ipsum dolor sit amet elit.'
    },
    {
        img: 'https://gmedia.playstation.com/is/image/SIEPDC/ps-app-control-image-block-01-en-13nov20?$native--t$',
        title: 'Eget est lorem',
        text: 'Lorem Ipsum adipiscing elit ipsum.'
    },
    {
        img: 'https://gmedia.playstation.com/is/image/SIEPDC/ps-app-control-image-block-01-en-13nov20?$native--t$',
        title: 'Tempus imperdiet',
        text: 'Orci porta non pulvinar neque laoreet.'
    },
    {
        img: 'https://gmedia.playstation.com/is/image/SIEPDC/ps-app-control-image-block-01-en-13nov20?$native--t$',
        title: 'Mattis rhoncus',
        text: 'Bibendum neque egestas congue quisque.'
    },
    {
        img: 'https://gmedia.playstation.com/is/image/SIEPDC/ps-app-control-image-block-01-en-13nov20?$native--t$',
        title: 'Odio ut enim',
        text: 'Mattis rhoncus urna neque viverra justo.'
    }
]

const Carousel = () => {
    const [settings, setSettings] = useState(config)
    return (
        <div>
            <Slider {...settings} className={style.sliderContainer}>
                {products.map((x, i) => {
                    return <div key="{i}" className={style.imgCard}>
                        <img className={style.img} src={x.img} />
                            <div className={style.cardBody}>
                                <div className={style.cardTitle}>{x.title}</div>
                                <div className={style.cardText}>{x.text}</div>
                            </div>
                    </div>
                })}
                </Slider>
        </div>
    )
}

export default Carousel