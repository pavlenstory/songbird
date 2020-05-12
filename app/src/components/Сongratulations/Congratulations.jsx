import React from 'react';
import s from './Congratulations.module.css'


let Congratulations = (props) => {
    return (
        <div className={s.congratulations}>
            <h1 className={s.congratulations__title}>Поздравляем!</h1>
            <p className={s.congratulations__description}>Вы прошли викторину и набрали
                <span> {props.score} </span>
                из 30 возможных баллов
            </p>
            <button className={s.congratulations__button}
                    onClick={() => props.setFirstArray(true)}
            >Попробовать еще
            </button>
        </div>
    )
};


export default Congratulations;

