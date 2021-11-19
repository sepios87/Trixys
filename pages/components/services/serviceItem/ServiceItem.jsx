import React from 'react';
import classes from './ServiceItem.module.scss';
import ServiceImage from './serviceImage/ServiceImage';

const ServiceItem = (props) => {
    return (
        <figure className={classes.services}>
            <ServiceImage name={props.name} />
            <div className={classes.services__illustration}>
                <div className={classes.services__back} />
            </div>
            <figcaption>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </figcaption>
        </figure>
    );
};

export default ServiceItem;
