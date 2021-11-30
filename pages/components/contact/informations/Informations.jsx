import React from 'react';
import classes from './Informations.module.scss';
import {AiOutlineMail, AiOutlinePhone} from 'react-icons/ai';
import {BsMap} from 'react-icons/bs';
import {MdOutlineWatchLater} from 'react-icons/md';

const Informations = () => {

    return <section className={classes.informations}>
        <h2>Informations</h2>
        {/* <ul>
            <li>
                <AiOutlineMail className={classes.informations__icon}/>
                <a href="mailto:contact.trixys@gmail.com">contact.trixys@gmail.com</a>
            </li>
            <li>
                <AiOutlinePhone className={classes.informations__icon}/>
                <a href="tel:0606060606">06 06 06 06 06</a>
            </li>
            <li>
                <BsMap className={classes.informations__icon}/>
                <a href="#">44 Avenue Albert Einstein - 17000 La Rochelle</a>
            </li>
            <li>
                <MdOutlineWatchLater className={classes.informations__icon}/>
                <a href="#">9h-12h 13h30-18h</a>
            </li>
        </ul> */}
        <div className={classes.contacts}>
            <figure className={classes.contact}>
                <img src="/svg/adresse-picto.svg" alt="Adresse" className={classes.contact__svg} />
                <figcaption>
                    <a href="#" className={classes.contact__link}>44 Avenue Albert Einstein,<br/> 17000 LA ROCHELLE</a>
                </figcaption>
            </figure>
            <figure className={classes.contact}>
                <img src="/svg/tel-picto.svg" alt="Tel" className={classes.contact__svg} />
                <figcaption>
                    <a href="#" className={classes.contact__link}>06 06 06 06 06</a>
                </figcaption>
            </figure>
            <figure className={classes.contact}>
                <img src="/svg/mail-picto.svg" alt="Mail" className={classes.contact__svg} />
                <figcaption>
                    <a href="#" className={classes.contact__link}>contact.trixys@gmail.com</a>
                </figcaption>
            </figure>
        </div>
    </section>
}

export default Informations;
