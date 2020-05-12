import React from 'react';
import s from './Menu.module.css'
import MenuElement from "./MenuElement/MenuElement";


let Menu = (props) => {

    let menuElements = props.typesBirds.map((e) => {
        return <MenuElement
            {...props}
            key={e.id}
            id={e.id}
            name={e.name}
            active={e.active}/>
    });

    return (
        <div className={s.menu}>
            {menuElements}
        </div>
    )
};


export default Menu;

