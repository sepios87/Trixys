import React, {useState} from 'react';
import ContactForm from "../../components/contact-form/ContactForm";
import classes from "./Contact.module.scss";
import Informations from "../informations/Informations";

const Contact = () => {

    const [windowWidth, setWindowWidth] = useState(1440)

    if (typeof window === "undefined") {
        console.log("Oops, `window` is not defined")
    } else {
        window.addEventListener("resize", widthSetter);
    }

    function widthSetter () {
        setWindowWidth(window.innerWidth);
    }

    return <section className={classes.contact}>
        {windowWidth > 700 && <div className={classes.contact__item}>
            <ContactForm/>
        </div>}
        {windowWidth > 700 && <div className={classes.contact__item}>
            <Informations />
        </div>}
        {windowWidth <= 700 && <ContactForm/>}
    </section>
}

export default Contact;
