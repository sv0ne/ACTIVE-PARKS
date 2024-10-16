import React from 'react';
import css from "./Content.module.scss";
import man from "../../assets/img/man.png";
import Form from "../Form/Form";

const Content = () => {
    return (
        <div className={css.content}>
            <div className="container">
                <div className={css.content__wrap}>
                    <div className={css.content__body}>
                        <Form/>
                        <div>
                            <img className={css.banner__image} src={man} alt="man"/>
                            <p className={css.banner__title}>ЗДОРОВА УКРАЇНА</p>
                            <p className={css.banner__text}>ПРОГРАМА ПРЕЗИДЕНТА УКРАЇНИ</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;