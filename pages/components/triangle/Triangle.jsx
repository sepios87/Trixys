import React from 'react';
import classes from './Triangle.module.scss';
import { useSpring, animated } from 'react-spring';

const Triangle = ({ num, classNameTriangle }) => {
    const config = { duration: 3200, tension: 50, mass: 50, friction: 200 };

    const test = useSpring({
        from: { transform: 'translate(0px, 0px) rotate(0deg)' },
        to: [{ transform: `translate(-3px, -9px) rotate(${num%2 == 0 && '-'}5deg)` }, { transform: 'translate(0px, 0px) rotate(0deg)' }],
        config:config,
        loop: true,
    });

    return (
        <animated.img
            style={test}
            className={classNameTriangle + ' ' + classes.triangles}
            src={`/svg/triangle${num}.svg`}
            alt="triangleFlottant"
        ></animated.img>
    );
};

export default Triangle;
