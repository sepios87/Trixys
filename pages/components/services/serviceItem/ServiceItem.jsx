import React, { useEffect, useState } from 'react';
import classes from './ServiceItem.module.scss';
import ServiceImage from "../../service-image/ServiceImage";
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
            <div className={classes.illustration}>
                <img
                    alt=""
                    className={classes.back}
                    src={image.src}
                    style={{ transform: `rotate(${Math.random() * 180}deg)` }}
                />
                Service
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
            <div className={classes.illustration}>
                <img
                    alt=""
                    className={classes.back}
                    src={image2.src}
                    style={{ transform: `rotate(${Math.random() * 180}deg)` }}
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
