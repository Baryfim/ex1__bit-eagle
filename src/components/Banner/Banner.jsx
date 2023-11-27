import React from "react";
import classes from "./Banner.module.css"
import Container from "../Containter/container";
// Images
import MainImage from "../../images/mainimg 1.svg"

const Banner = () => {
    return (
        <Container>
            <div className={classes.BannerContent}>
                <div className={classes.BannerContentTextField}>
                    <h1>Bitcoin Crypto Exchange</h1>
                    <p>Instantly exchange Bitcoin at the best BTC exchange rate on BirdEx. Free of limits, accounts, and worries. Spend your time and energy on what matters — we’ll handle the rest.</p>
                    <div className={classes.BannerContentBlockBtns}>
                        <button className={classes.BtnElGo}>
                            Exchange
                        </button>
                        <button className={classes.BtnElInfo}>
                            Contact Us
                        </button>
                    </div>
                </div>
                <div className={classes.MainImage}>
                    <img src={MainImage} alt="MainImage" />
                </div>
            </div>
        </Container>
    )
}

export default Banner;