import React from 'react';
import classes from './Informations.module.scss';
import Image from 'next/image';
import { AiOutlineInstagram } from 'react-icons/ai';
import { IoLogoFacebook } from 'react-icons/io';

const Informations = () => {
    return (
        <section className={classes.informations}>
            <h2>Informations</h2>
            <div className={classes.contacts}>
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://goo.gl/maps/zTmeeWjuJdoStEiA7"
                >
                    <figure className={classes.contact}>
                        <Image
                            loading="lazy"
                            src="/svg/adresse-picto.svg"
                            alt="Adresse"
                            className={classes.contact__svg}
                            width={130}
                            height={130}
                            layout='fixed'
                        />
                        <figcaption>
                            <p className={classes.contact__content}>
                                44 Avenue Albert Einstein,
                                <br /> 17000 LA ROCHELLE
                            </p>
                        </figcaption>
                    </figure>
                </a>
                <a href="tel:+33606060606">
                    <figure className={classes.contact}>
                        <Image
                            loading='lazy'
                            src="/svg/tel-picto.svg"
                            alt="Tel"
                            className={classes.contact__svg}
                            width={130}
                            height={130}
                            layout='fixed'
                        />
                        <figcaption>
                            <p className={classes.contact__content}>
                                09 79 19 04 55
                            </p>
                        </figcaption>
                    </figure>
                </a>
                <a href="mailto:contact.trixys@gmail.com">
                    <figure className={classes.contact}>
                        <Image
                            loading='lazy'
                            src="/svg/mail-picto.svg"
                            alt="Mail"
                            className={classes.contact__svg}
                            width={130}
                            height={130}
                            layout='fixed'
                        />
                        <figcaption>
                            <p className={classes.contact__content}>
                                contact.trixys@gmail.com
                            </p>
                        </figcaption>
                    </figure>
                </a>
            </div>
            <div className={classes.socials}>
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.instagram.com/trixys_agency/?hl=fr"
                >
                    <AiOutlineInstagram />
                </a>
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.facebook.com/Trixys-107698671761137"
                >
                    <IoLogoFacebook />
                </a>
            </div>
        </section>
    );
};

export default Informations;
