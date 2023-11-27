import React from "react";
import classes from "./footer.module.css"
import Container from "../Containter/container";
// Images
import Logo from "../../images/logo 4.svg"
import INS from "../../images/inst_foot.svg"
import TEL from "../../images/tg_foot.svg"

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <Container>
                <div className={classes.HeadBlockFooter}>
                    <div className={classes.tabelInfoFooterBlock}>
                        <div className={classes.colItem}>
                            <h3>Company</h3>
                            <div className={classes.LinksBlock}> 
                                <p>About Us</p>
                                <p>Contacts</p>
                                <p>Jobs</p>
                            </div>
                        </div>
                        <div className={classes.colItem}>
                            <h3>For Partners</h3>
                            <div className={classes.LinksBlock}> 
                                <p>Contacts</p>
                                <p>Referral Program</p>
                            </div>
                        </div>
                        <div className={classes.colItem}>
                            <h3>Support</h3>
                            <div className={classes.LinksBlock}> 
                                <p>FAQ</p>
                                <p>How it works</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.ContactsBlock}>
                        <div className={classes.SNetworksBlock}>
                            <div className={classes.ItemSNetwork}>
                                <img src={INS} alt="SNetwork" />
                            </div>
                            <div className={classes.ItemSNetwork}>
                                <img src={TEL} alt="SNetwork" />
                            </div>
                            <div className={classes.ItemSNetwork}>
                                <img src={INS} alt="SNetwork" />
                            </div>
                            <div className={classes.ItemSNetwork}>
                                <img src={TEL} alt="SNetwork" />
                            </div>
                            <div className={classes.ItemSNetwork}>
                                <img src={INS} alt="SNetwork" />
                            </div>
                            <div className={classes.ItemSNetwork}>
                                <img src={TEL} alt="SNetwork" />
                            </div>
                        </div>
                        <p className={classes.EmailBlock}>support@birdex.com</p>
                    </div>
                </div>
                <div className={classes.footerBlock}>
                    <img src={Logo} alt="Logo" />
                    <p className={classes.logoItem}>
                        BirdEx  ©  2023
                    </p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;