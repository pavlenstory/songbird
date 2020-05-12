import React from 'react';
import s from './Music.module.css'
import YesBirdSelectedMusic from "./IsTrueBirdSelected/YesBirdSelectedMusic";
import NoBirdSelectedMusic from "./IsTrueBirdSelected/NoBirdSelectedMusic";


let Music = (props) => {
    return (
        <div className={s.music}>
            {props.isClickedRandomlySelectedBird ? <YesBirdSelectedMusic {...props}/> :
                <NoBirdSelectedMusic {...props}/>}
        </div>
    )
};

export default Music;