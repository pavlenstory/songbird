import React from 'react';
import s from '../Menu.module.css'

let MenuElement = (props) => {
    return (
        <div className={s.menu__element}>
            <div className={props.active ? s.menu__active : s.nothing}
                 key={props.id}>{props.name}</div>
        </div>
    )
};

export default MenuElement;