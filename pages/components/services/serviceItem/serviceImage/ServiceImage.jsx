import React from 'react';

// css import
import classes from './ServiceImage.module.scss';

const ServiceImage = (props) => {

    return <img
        className={classes.services__img}
        src={props.src}
        alt={props.alt}
    />
}

export default ServiceImage;
