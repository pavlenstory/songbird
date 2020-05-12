import React from 'react';
import what from "../../../assets/photo/what.jpg"
import s from '.././Music.module.css'
import Player from "../../Player/Player";


let NoBirdSelectedMusic = (props) => {
    return (
        <>
            <img className={s.music__bird} src={what} alt='bird'/>
            <ul className={s.music__list}>
                <li>
                    <h2 className={s.music__nameBird}>******</h2></li>
                <li>
                    <div className={s.music__audioPlayer}>
                        <Player audio={props.randomlySelectedBird.audio}/>
                    </div>
                </li>
            </ul>
        </>
    )
};

export default NoBirdSelectedMusic;