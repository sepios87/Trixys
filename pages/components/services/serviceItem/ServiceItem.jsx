import React, { useState } from 'react';
import classes from './ServiceItem.module.scss';
import { BsChevronDown } from 'react-icons/bs';

const ServiceItem = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const openP = () => {
        setIsOpen(!isOpen);
    };

    return (
        <figure className={classes.services} onClick={openP}>
            <img src={props.src} alt={props.alt}/>
            <figcaption className={`${isOpen ? classes.services__isopen : ""}`}>
                <h3>{props.name}</h3>
                <BsChevronDown className={classes.services__chevron}/>
                <p>{props.description}</p>
            </figcaption>
        </figure>
    );
};

export default ServiceItem;
