import React from "react";
import Bunner from "../../components/Banner/Banner"
import Info from "../../components/Info/Info";
import About from "../../components/About/about";
import Contacts from "../../components/Contacts/Contacts";



const Home = () => {
    return (
        <>
            <Bunner />
            <Info />
            <About />
            {/* <Contacts /> */}
        </>
    )
}

export default Home;