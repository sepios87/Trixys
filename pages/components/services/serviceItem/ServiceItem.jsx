import React, { useEffect, useState } from 'react';
import classes from './ServiceItem.module.scss';

const ServiceItem = (props) => {
    const [isDarkTheme, setDarkTheme] = useState(null);

    useEffect(() => {
        setDarkTheme(document.body.classList.contains('dark-mode'));
    }, []);

    return isDarkTheme ? (
        <figure className={classes.services}>
            <div className={classes.illustration}>
                <img
                    alt=""
                    className={classes.back}
                    src={'./image/back-white.png'}
                    style={{ transform: `rotate(${Math.random() * 20} deg)` }}
                />
            </div>
            <figcaption>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </figcaption>
        </figure>
    ) : (
        <figure className={classes.services}>
            <div className={classes.illustration}>
                <img
                    alt=""
                    className={classes.back}
                    src={'./image/back-dark.png'}
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
