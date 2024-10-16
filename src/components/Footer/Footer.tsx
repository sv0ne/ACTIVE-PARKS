import React from 'react';
import css from "./Footer.module.scss";

const Footer = () => {
    return (
        <div className="container">
            <div className={css.footer}>
                <div className={css.footer__links}>
                    <a href="">Політика конфіденційності</a>
                    <a href="">Обробка персональних даних</a>
                    <a href="">info@sportforall.gov.ua</a>
                    <a href="">facebook</a>
                </div>
                <p>© 2021  ВЦФЗН  «Спорт для всіх»</p>
            </div>
        </div>
    );
};

export default Footer;