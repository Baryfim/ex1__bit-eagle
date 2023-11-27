import React from "react";
import classes from "./Info.module.css"
// Images
import Bitcoin from "../../images/bitcoin 1.svg"
import BTC from "../../images/crypto/btc.svg"
import ETH from "../../images/crypto/eth.svg"
import XRP from "../../images/crypto/xrp.svg"
import Container from "../Containter/container";


const Info = () => {
    return (
        <Container>
            <div className={classes.Info}>
                <h1>EXCHANGE CRYPTO</h1>
                <div className={classes.InfoBlock}>
                    <div className={classes.TextInfoData}>
                        <h3>Convert your crypto at the best rate</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className={classes.ImageCoin}>
                        <img src={Bitcoin} alt="Bitcoin" />
                    </div>
                    <div className={classes.PricesInfo}>
                        <div className={classes.ItemBlockElement}>
                            <img src={BTC} height={32} width={32} alt="coin" />
                            <p className={classes.CoinName}>BTC</p>
                            <span className={classes.CoinFullname}>Bitcoin</span>
                            <p className={classes.CoinPrice}>$ 26 572,50</p>
                            <span className={classes.ChangeCoin}>-0.28</span>
                        </div>
                        <div className={classes.ItemBlockElement}>
                            <img src={ETH} height={32} width={32} alt="coin" />
                            <p className={classes.CoinName}>ETH</p>
                            <span className={classes.CoinFullname}>Bitcoin</span>
                            <p className={classes.CoinPrice}>$ 1 591,36</p>
                            <span className={classes.ChangeCoin}>-0.28</span>
                        </div>
                        <div className={classes.ItemBlockElement}>
                            <img src={XRP} height={32} width={32} alt="coin" />
                            <p className={classes.CoinName}>XRP</p>
                            <span className={classes.CoinFullname}>Bitcoin</span>
                            <p className={classes.CoinPrice}>$ 210,48</p>
                            <span className={classes.ChangeCoin}>-0.28</span>
                        </div>
                    </div>
                </div>
                <div className={classes.BtcBlock}>
                    <button className={classes.BtnElGo}>
                        Exchange
                    </button>
                    <button className={classes.BtnElInfo}>
                        FAQ
                    </button>
                </div>
            </div>
        </Container>
    )
}

export default Info