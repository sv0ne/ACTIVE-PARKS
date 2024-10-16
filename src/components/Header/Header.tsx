import React from 'react';
import logo from "../../assets/img/logo.png";
import css from "./Header.module.scss";
import {IconReg} from "../icons/IconReg";

const Header = () => {
    return (
        <div className={css.header}>
            <div className="container">
                <div className={css.header__body}>
                    <div className={css.logo}>
                        <img src={logo} alt="logo"/>
                        <p className={css.logo__text}>АКТИВНI ПАРКИ</p>
                    </div>
                    <button className={css.header__button}>
                        <IconReg/>
                        <span>Реєстрація</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;