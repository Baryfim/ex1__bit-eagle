import React from "react";
import classes from "./Header.module.css"
import Container from "../Containter/container";
// Images
import Logo from "../../images/logo 2.svg"
import Arrow from "../../images/arrow.svg"

import INS from "../../images/ri_instagram-fill.svg"
import TEL from "../../images/cib_telegram-plane.svg"


const Header = () => {
    return (
        <Container>
            <header className={classes.Header}>
                <div className={classes.HeaderLogoBlock}>
                    <img src={Logo} alt="img" />
                    <div className={classes.LogoText}>
                        <h2>BirdEx</h2>
                    </div>
                </div>
                <div className={classes.NavBarList}>
                    <div className={classes.NavBarItem}>
                        <p>Exchange</p>
                    </div>
                    <div className={classes.NavBarItem}>
                        <p>About Us</p>
                    </div>
                    <div className={classes.NavBarItem}>
                        <p>For Partners</p>
                    </div>
                    <div className={classes.NavBarItem}>
                        <p>Support</p>
                    </div>
                    <div className={classes.NavBarItem}>
                        <p>Contact Us</p>
                    </div>
                </div>
                <button className={classes.SelectorLangs}>
                    <span>En</span>
                    <img src={Arrow} alt="arrow" />
                </button>
                <div className={classes.SNetwork}>
                    <div className={classes.SNetworkBlock}>
                        <div className={classes.ItemSNetwork}>
                            <img src={INS} alt="SNetwork" />
                        </div>
                        <div className={classes.ItemSNetwork}>
                            <img src={TEL} alt="SNetwork" />
                        </div>
                    </div>
                </div>
            </header>
        </Container>
    )
}

export default Header;