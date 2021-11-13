import React from 'react';
import ContactForm from "./contact-form/ContactForm";

import classes from "./Contact.module.scss";
import Informations from "../informations/Informations";
import useWindowDimensions from '../useWindowDimensions';

const Contact = () => {

    const { width } = useWindowDimensions();

    return <section className={classes.contact}>
        {width > 700 && <div className={classes.contact__item}>
            <ContactForm/>
        </div>}
        {width > 700 && <div className={classes.contact__item}>
            <Informations />
        </div>}
        {width <= 700 && <ContactForm/>}
    </section>
}

export default Contact;
