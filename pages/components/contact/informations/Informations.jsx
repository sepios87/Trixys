import React from 'react';
import classes from './Informations.module.scss';

const Informations = (props) => {

    const {
        width
    } = props

    return <section className={classes.informations}>
        <h2>Informations</h2>
        <ul>
            <li>
                {width >= 770 && <img src='./svg/mail-pictowhite.svg'/>}
                {width < 770 && <img src='./svg/mail-picto.svg'/>}
                <a href="mailto:contact.trixys@gmail.com">contact.trixys@gmail.com</a>
            </li>
            <li>
                {width >= 770 && <img src='./svg/tel-pictowhite.svg'/>}
                {width < 770 && <img src='./svg/tel-picto.svg'/>}
                <a href="tel:0606060606">06 06 06 06 06</a>
            </li>
            <li>
                {width >= 770 && <img src='./svg/adresse-pictowhite.svg'/>}
                {width < 770 && <img src='./svg/adresse-picto.svg'/>}
                <a href="#">44 Avenue Albert Einstein - 17000 La Rochelle</a>
            </li>
        </ul>
    </section>
}

export default Informations;
