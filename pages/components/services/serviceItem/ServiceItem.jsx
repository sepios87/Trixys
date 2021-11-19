import React, { useEffect, useState } from 'react';
import classes from './ServiceItem.module.scss';
import ServiceImage from "./serviceImage/ServiceImage";
import image from '../../../../public/images/back-dark.png';
import image2 from '../../../../public/images/back-white.png';

const ServiceItem = (props) => {
    const [isDarkTheme, setDarkTheme] = useState(null);

    useEffect(() => {
        setDarkTheme(document.body.classList.contains('dark-mode'));
    }, []);

    return isDarkTheme ? (
        <figure className={classes.services}>
            <ServiceImage
                name={props.name}
            />
            <div className={classes.services__illustration}>
                <div
                    className={classes.services__back}
                />
            </div>
            <figcaption>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </figcaption>
        </figure>
    ) : (
        <figure className={classes.services}>
            <ServiceImage
                name={props.name}
            />
            <div className={classes.services__illustration}>
                <div
                    className={classes.services__back}
                />
            </div>
            <figcaption>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </figcaption>
        </figure>
    );
};

export default ServiceItem;
