import React from 'react';
import ContactForm from './contact-form/ContactForm';
import classes from './Contact.module.scss';
import Informations from './informations/Informations';

const Contact = (props) => {
    const { width } = props;

    return (
        <section className={classes.contact}>
            {/* background elements */}
           
            {/* end background elements */}
            <div className={classes.contact__item}>
                <ContactForm />
            </div>
            <div className={classes.contact__item}>
                <Informations width={width} />
            </div>
        </section>
    );
};

export default Contact;
