import React from 'react';
import styles from "./Header.module.css";
import logo from "../../assets/img/logo.png";
import HeaderDots from "./HeaderDots/HeaderDots";

const Header = () => {
    return (
        <div className={styles.header__wrapper}>
            <div className={styles.header__upper}>
                <div>
                    <img className={styles.main__header_logo} src={logo} alt=""/>
                </div>
                <div className={styles.main__header_text}>PROCHAINE EXPO 23-28 NOVEMBRE 2021</div>
            </div>
            <div className={styles.header__selector}>
                <div className={styles.header__selector_left}>C’est quoi le questionnaire d’intérêt ?</div>
                <div className={styles.header__selector_center}>Quel métier est fait pour toi?</div>
                <div className={styles.header__selector_right}>Planifie ta visite</div>
                <HeaderDots />
            </div>

            <h2 className={styles.header__title}>Bienvenue au questionnaire d’intérêt</h2>
        </div>
    );
};

export default Header;