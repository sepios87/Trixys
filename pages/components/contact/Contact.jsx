import React from 'react';
import ContactForm from './contact-form/ContactForm';
import classes from './Contact.module.scss';
import Informations from './informations/Informations';
import Triangle from '../triangle/Triangle';

const Contact = (props) => {
    const { width } = props;

    return (
        <section className={classes.contact}>
            {/* background elements */}
            <img src="svg/croix.svg" alt="croix" className="croix" />
            <img src="svg/montagne.svg" alt="montagnes" className="montagne" />
            <Triangle num={6} classNameTriangle="triangle__jaune" />
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
