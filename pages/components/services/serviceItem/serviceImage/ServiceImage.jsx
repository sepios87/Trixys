import React from 'react';

// css import
import classes from './ServiceImage.module.scss';

const ServiceImage = (props) => {

    if (props.name === "Web Design") {
        return <span
            className={classes.span + ' ' + classes.web}
            aria-hidden="true"
            data-icon="&#xe902;"
        />
    } else if (props.name === "Graphisme") {
        return <span
            className={classes.span + ' ' + classes.graph}
            aria-hidden="true"
            data-icon="&#xe901;"
        />
    } else if (props.name === "Développement Web") {
        return <span
            className={classes.span + ' ' + classes.dev}
            aria-hidden="true"
            data-icon="&#xe900;"
        />
    } else if (props.name === "UX / UI Design") {
        return <span
            className={classes.span + ' ' + classes.ux}
            aria-hidden="true"
            data-icon="&#xe92e;"
        />
    } else {
        return <h2>
            {props.name}
        </h2>
    }
}

export default ServiceImage;
