import React, { useState } from 'react';
import classes from './ServiceItem.module.scss';
import { BsChevronDown } from 'react-icons/bs';

const ServiceItem = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <figure className={classes.services} onClick={() => setIsOpen(!isOpen)}>
            <img className={classes.services__img} src={props.src} alt={props.alt}/>
            <figcaption>
                <h3 className={classes.services__title}>{props.name}</h3>
                <BsChevronDown className={`${classes.services__chevron} ${isOpen && classes.services__chevron_open}`}/>
                <p className={`${classes.services__content} ${isOpen && classes.services__content_open}`}>{props.description}</p>
            </figcaption>
        </figure>
    );
};

export default ServiceItem;
