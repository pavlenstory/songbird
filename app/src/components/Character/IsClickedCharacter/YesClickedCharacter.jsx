import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import s from '../Character.module.css'

const YesClickedCharacter = (props) => {
    return (
        <>
            <div>
                <div className={s.character__wrapper}>
                    <img className={s.character__img} src={props.selectedBird.image} alt={props.selectedBird.name}/>

                    <ul className={s.character__list}>
                        <li className={s.character__item}><h4>{props.selectedBird.name}</h4></li>
                        <li className={s.character__item}><span>{props.selectedBird.species}</span></li>
                    </ul>

                </div>
                <div className={s.character__audio}>
                    <AudioPlayer
                        autoPlayAfterSrcChange={false}
                        src={props.selectedBird.audio}/>
                </div>
                <div>
                    <p className={s.character__description}>{props.selectedBird.description}</p>
                </div>
            </div>
        </>
    )
};

export default YesClickedCharacter;