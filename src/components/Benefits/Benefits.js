import React from 'react';
import style from './Benefits.module.scss'
import sales from '../assets/icons/hands_with_stat.png'
import smile from '../assets/icons/smile.png'
import search from '../assets/icons/search.png'
import clocks from '../assets/icons/clocks.png'

const Benefits = () => {
    return (
        <div className={style.benefits}>
            <div className={style.benefitsHeader}><h2>You need us.</h2></div>
            <div className={style.benefitsIconsContainer}>
                <div className={style.upperIcons}>
                <div className={style.benefitsElementContainer + " " + style.salesEl}>
                    <img src={sales} />
                    <p>To increase sales, giving customers the
                        opportunity to place orders directly without
                        opening a browser.
                    </p>
                </div>
                <div className={style.benefitsElementContainer + " " + style.searchEl}>
                    <img src={search} />
                    <p>To facilitate the search for products in the online store
                        and counseling at the selection stage.
                    </p>
                </div>
                </div>
                <div className={style.downIcons}>
                <div className={style.benefitsElementContainer + " " + style.smileEl}>
                    <img src={smile} />
                    <p>To create a positive image in the eyes of the target audience since
                        every self-respecting company finds specialists
                        to create a user-friendly application for a smartphone.
                    </p>
                </div>
                <div className={style.benefitsElementContainer + " " + style.clockEl}>
                    <img src={clocks} />
                    <p>To keep customers updated on new products, promotions,
                        optimize personal account management, etc.
                    </p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Benefits;