import React from 'react';
import classes from './Triangle.module.scss';
import { useSpring, animated } from 'react-spring';

const Triangle = ({ num, classNameTriangle }) => {
    const randomNumber = (min, max) => {
        const num = min + Math.floor(Math.random() * (max - min));
        return Math.random() > 0.5 ? -num : num;
    };

    const transform = `translate(-3px, ${randomNumber(5, 15)}px) 
    rotate(${randomNumber(3, 6)}deg)`;

    const animation = useSpring({
        from: { transform: 'translate(0px, 0px) rotate(0deg)' },
        to: { transform: transform },
        config: { duration: 2800, tension: 50, mass: 50, friction: 80 },
        loop: { reverse: true },
    });

    return (
        <animated.img
            loading="lazy"
            style={animation}
            className={classNameTriangle + ' ' + classes.triangles}
            src={`svg/triangle${num}.svg`}
            alt="triangleFlottant"
        ></animated.img>
    );
};

export default Triangle;
