import React from "react";
import classes from "./about.module.css"
import Container from "../Containter/container";
// Images
import Logo from "../../images/logo 3.svg"
import INS from "../../images/ri_instagram-fill.svg"
import TEL from "../../images/cib_telegram-plane.svg"


const About = () => {
    return (
        <Container>
            <div className={classes.About}>
                <h1 className={classes.AboutTextTitle}>ABOUT BIRDEX</h1>
                <div className={classes.AboutBlocksField}>
                    <div className={classes.ImageItem}>
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className={classes.InfoTextItem}>
                        <h3>BirdEx - instant crypto exchange service</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum </p>
                        <div className={classes.BtnsAndLinksBlock}>
                            <button className={classes.BtnElGo}>
                                Learn More
                            </button>
                            <div className={classes.SNetworksBlock}>
                                <div className={classes.ItemSNetwork}>
                                    <img src={INS} alt="SNetwork" />
                                </div>
                                <div className={classes.ItemSNetwork}>
                                    <img src={TEL} alt="SNetwork" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default About;