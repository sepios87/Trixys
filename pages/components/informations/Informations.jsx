import React from 'react';
import classes from './Informations.module.scss';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import MapIcon from '@mui/icons-material/Map';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

const Informations = () => {

    return <section className={classes.informations}>
        <h2>Informations</h2>
        <ul>
            <li>
                <EmailIcon className={classes.icon}/>
                <a href="#">contact.trixys@gmail.com</a>
            </li>
            <li>
                <PhoneIcon className={classes.icon}/>
                <a href="#">06 06 06 06 06</a>
            </li>
            <li>
                <MapIcon className={classes.icon}/>
                <a href="#">44 Avenue Albert Einstein - 17000 La Rochelle</a>
            </li>
            <li>
                <WatchLaterIcon className={classes.icon}/>
                <a href="#">9h-12h 13h30-18h</a>
            </li>
        </ul>
    </section>
}

export default Informations;
