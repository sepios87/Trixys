import React, {useEffect, useState} from 'react';

// css import
import classes from './Services.module.scss';
import ServiceImage from '../service-image/ServiceImage';

// ui icons import
const Services = (props) => {

    const [isDarkTheme, setDarkTheme] = useState(null);

    useEffect(() => {
        setDarkTheme(document.body.classList.contains('dark-mode'));
    }, [])

    return isDarkTheme
            ? <figure className={classes.services}>
                <ServiceImage
                    name={props.name}
                />
                <ServiceImage
                    name={props.name}
                />
                <div className={classes.illustration}>
                    <img
                        className={classes.back}
                        src={"./image/back-white.png"}
                        style={{transform: `rotate(${Math.random() * 20} deg)`}}
                    />
                </div>
                <figcaption>
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                </figcaption>
            </figure>
            : <figure className={classes.services}>
                <ServiceImage
                    name={props.name}
                />
                <div className={classes.illustration}>
                    <img
                        className={classes.back}
                        src={"./image/back-dark.png"}
                        style={{transform: `rotate(${Math.random() * 180}deg)`}}
                    />
                </div>
                <figcaption>
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                </figcaption>
            </figure>
}

export default Services;
