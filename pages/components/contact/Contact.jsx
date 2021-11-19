import React from 'react';
import ContactForm from './contact-form/ContactForm';
import classes from './Contact.module.scss';
import Informations from './informations/Informations';

const Contact = () => {
    return (
        <section className={classes.contact}>
            <div className={classes.contact__item}>
                <ContactForm />
            </div>
            <div className={classes.contact__item}>
                <Informations />
            </div>
        </section>
    );
};

export default Contact;
