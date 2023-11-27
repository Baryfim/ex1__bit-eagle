import React from "react";
import classes from "./Contacts.module.css"
// Images
import INS from "../../images/ri_instagram-fill.svg"
import TEL from "../../images/cib_telegram-plane.svg"


const Contacts = () => {
    return (
        <div className={classes.ContainerBlock}>
            <div className={classes.ContactsBlock}>
                <h1 className={classes.ContactsBlockTitile}>
                    CONTACT US
                </h1>
                <div className={classes.ContactsChildrenBlock}>
                    <div className={classes.ContactsForm}>
                        <h3>Ask your question 24/7</h3>
                        <div className={classes.FormFields}>
                            <input placeholder="Your name" />
                            <input placeholder="You e-mail" />
                        </div>
                        <div className={classes.Area}>
                            <textarea placeholder="Your message"></textarea>
                        </div>
                        <div className={classes.BlockBtns}>
                            <button className={classes.BtnElGo}>
                                Submit
                            </button>
                        </div>
                    </div>
                    <div className={classes.LineBlock}>
                        <div className={classes.LineItem}></div>
                    </div>
                    <div className={classes.ContactsLinks}>
                        <h3>Our contacts</h3>
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
                        <p className={classes.InfoMail}>
                            support@birdex.com
                        </p>
                        <p className={classes.InfoChild}>
                            BirdEx  ©  2023
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts;