import React from 'react';
import s from '../Music.module.css'
import Player from "../../Player/Player";


let YesBirdSelectedMusic = (props) => {
    return (
        <>
            <img className={s.music__bird} src={props.randomlySelectedBird.image} alt='bird'/>
            <ul className={s.music__list}>
                <li>
                    <h2 className={s.music__nameBird}>{props.randomlySelectedBird.name}</h2></li>
                <li>
                    <div className={s.music__audioPlayer}>
                        <Player audio={props.randomlySelectedBird.audio}/>
                    </div>
                </li>
            </ul>
        </>
    )
};

export default YesBirdSelectedMusic;