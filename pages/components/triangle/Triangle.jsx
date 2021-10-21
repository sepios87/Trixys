import React from 'react';
import classes from './Triangle.module.scss';

const Triangle = ({ num, className }) => {

    const ramdomBool = () => Math.random() > 0.5;

    return <img
            className={(ramdomBool() ? classes.anim0 : classes.anim1) + ' ' + className + ' ' + classes.triangles}
            style={{
                animationDelay: `${Math.random() * 2000}ms`,
                animationDuration: `${4 + Math.random() * 6}s`,
            }}
            src={`/svg/triangle${num}.svg`}
            alt="triangleFlottant"
        />
}

export default Triangle;
