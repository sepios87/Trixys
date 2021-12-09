import React from 'react';
import ContactForm from './contact-form/ContactForm';
import classes from './Contact.module.scss';
import Informations from './informations/Informations';

const Contact = (props) => {
    const { width } = props;

    return (
        <section className={classes.contact}>
            {/* background elements */}
            <img loading='lazy' src="svg/croix.svg" alt="croix" className="croix" />
            <img loading='lazy' src="svg/montagne.svg" alt="montagnes" className="montagne" />
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
