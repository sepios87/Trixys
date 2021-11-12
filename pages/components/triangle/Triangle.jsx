import React, {useRef} from 'react';
import classes from './Triangle.module.scss';

const Triangle = ({ num, classNameTriangle }) => {

    const ramdomBool = () => Math.random() > 0.5;

    const TrianglStyle = useRef({
        animationDelay: `${Math.random() * 2000}ms`,
        animationDuration: `${4 + Math.random() * 6}s`
    });

    return <img
            className={classNameTriangle + ' ' + classes.triangles}
            style={TrianglStyle}
            src={`/svg/triangle${num}.svg`}
            alt="triangleFlottant"
        />
}

export default Triangle;
