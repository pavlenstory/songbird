import React from 'react';
import NoClickedCharacter from "./IsClickedCharacter/NoClickedCharacter";
import YesClickedCharacter from "./IsClickedCharacter/YesClickedCharacter";
import s from "./Character.module.css";

const Character = (props) => {
    return (
        <div className={s.character}>
            {props.isClickedSelectedBird ? <YesClickedCharacter selectedBird={props.selectedBird}/> :
                <NoClickedCharacter/>}
        </div>
    )
};

export default Character;