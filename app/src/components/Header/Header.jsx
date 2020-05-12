import React from 'react';
import Logo from "../../assets/photo/my_logo.jpg";
import s from './Header.module.css'

let Header = (props) => {
    return (
        <header className={s.header}>
            <div>
                <img className={s.header__logo} src={Logo} alt='logo'/>
                <span className={s.header__score}>Score: {props.score}</span>
            </div>
        </header>
    )
};


export default Header;

