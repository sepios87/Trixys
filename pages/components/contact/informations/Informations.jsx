import React from 'react';
import classes from './Informations.module.scss';

const Informations = () => {
    return (
        <section className={classes.informations}>
            <h2>Informations</h2>
            <div className={classes.contacts}>
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://goo.gl/maps/zTmeeWjuJdoStEiA7"
                    className={classes.contact__link}
                >
                    <figure className={classes.contact}>
                        <img
                            src="/svg/adresse-picto.svg"
                            alt="Adresse"
                            className={classes.contact__svg}
                        />
                        <figcaption>
                            <p>
                                44 Avenue Albert Einstein,
                                <br /> 17000 LA ROCHELLE
                            </p>
                        </figcaption>
                    </figure>
                </a>
                <a href="tel:+33606060606">
                    <figure className={classes.contact}>
                        <img
                            src="/svg/tel-picto.svg"
                            alt="Tel"
                            className={classes.contact__svg}
                        />
                        <figcaption>
                            <p>06 06 06 06 06</p>
                        </figcaption>
                    </figure>
                </a>
                <a href="mailto:contact.trixys@gmail.com">
                    <figure className={classes.contact}>
                        <img
                            src="/svg/mail-picto.svg"
                            alt="Mail"
                            className={classes.contact__svg}
                        />
                        <figcaption>
                            <p>contact.trixys@gmail.com</p>
                        </figcaption>
                    </figure>
                </a>
            </div>
        </section>
    );
};

export default Informations;
