import React from 'react';
import style from './Customers.module.scss'
import cust1 from '../../images/customers/Miroslav.png'
import cust2 from '../../images/customers/Volodymyr.png'
import cust3 from '../../images/customers/Yuriy.png'
import quotes from '../assets/icons/quotes.png'
import ellipse from '../../images/ellipses/Ellipse_customer.png'
const Customers = () => {
    return (
        <div className={style.customers}>
            <div className={style.customerHeading}>
                <h1>Customer trust us.</h1>
            </div>

            <div className={style.preferenceGrid}>
                <div className={style.cardContainer}>
                     <div className={style.cardImg}>
                         <img src={cust1} />
                     </div>
                    <div className={style.cardDesc}>
                        <h2>Miroslav Olar</h2>
                        <p className={style.ownerText}>owner of Should I Answer app</p>
                        <img src={quotes}/>
                        <p>That was great cooperation.
                            App is working really good
                        </p>
                    </div>
                </div>
                <div className={style.cardContainer}>
                     <div className={style.cardImg}>
                         <img src={cust2} />
                     </div>
                    <div className={style.cardDesc}>
                        <h2>Volodymyr Zhyhaylo</h2>
                        <p className={style.ownerText}>owner of Speakly app</p>
                        <img src={quotes}/>
                        <p>I had an idea and
                            those guys do it in the app.
                        </p>
                    </div>
                </div>
                <div className={style.cardContainer}>
                     <div className={style.cardImg}>
                         <img src={cust3} />
                     </div>
                    <div className={style.cardDesc}>
                        <h2>Yuri Kam</h2>
                        <p className={style.ownerText}>owner of Story Swiper app</p>
                        <img src={quotes}/>
                        <p>Perfect job!
                            That was fast and design is great.
                        </p>
                    </div>
                </div>


            </div>
            <div className={style.ellipseCust}><img src={ellipse}/></div>

        </div>
    );
};

export default Customers;