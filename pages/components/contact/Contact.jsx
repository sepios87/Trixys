import React from 'react';
import ContactForm from "../../components/contact-form/ContactForm";

import classes from "./Contact.module.scss";

const Contact = () => {
    return <section className={classes.contact}>
        <ContactForm/>
    </section>
}

export default Contact;
