import React from 'react';
import s from './MaximumScore.module.css';
import danceBird from "../../../assets/photo/76Nk.gif"


let MaximumScore = (props) => {
    return (
        <div className={s.maximumScore}>
            <h1 className={s.maximumScore__title}>Поздравляем, теперь вы 100% птицезнай</h1>
            <div><img className={s.maximumScore__photo} src={danceBird} alt="DanceBird"/></div>
            <button className={s.maximumScore__button}
                    onClick={() => props.setFirstArray(true)}
            >Попробовать еще
            </button>
        </div>
    )
};


export default MaximumScore;