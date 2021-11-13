import React from 'react';
import classes from './Informations.module.scss';
import {AiOutlineMail, AiOutlinePhone} from 'react-icons/ai';
import {BsMap} from 'react-icons/bs';
import {MdOutlineWatchLater} from 'react-icons/md';

const Informations = () => {

    return <section className={classes.informations}>
        <h2>Informations</h2>
        <ul>
            <li>
                <AiOutlineMail className={classes.icon}/>
                <a href="#">contact.trixys@gmail.com</a>
            </li>
            <li>
                <AiOutlinePhone className={classes.icon}/>
                <a href="#">06 06 06 06 06</a>
            </li>
            <li>
                <BsMap className={classes.icon}/>
                <a href="#">44 Avenue Albert Einstein - 17000 La Rochelle</a>
            </li>
            <li>
                <MdOutlineWatchLater className={classes.icon}/>
                <a href="#">9h-12h 13h30-18h</a>
            </li>
        </ul>
    </section>
}

export default Informations;
