import { useState } from 'react';
import classes from './Estimate.module.scss';

const ItemQuestionSlider = ({ min, max, point, onFinishedQuestion }) => {
    const [valueSlider, setValueSlider] = useState(min);

    return (
        <div className={classes.estimate__itemQuestionSlider}>
            <p
                onClick={() =>
                    valueSlider > min &&
                    setValueSlider(valueSlider - 1)
                }
                className={classes.buttonSlider}
            >
                -
            </p>
            <p className={classes.value}>{valueSlider}</p>
            <p
                onClick={() =>
                    valueSlider < max
                        ? setValueSlider(valueSlider + 1)
                        : null
                }
                className={classes.buttonSlider}
            >
                +
            </p>
            <p
                className={classes.estimate__validate}
                onClick={() => {
                    onFinishedQuestion(valueSlider * point);
                    setValueSlider(0);
                }}
            >
                Valider
            </p>
        </div>
    );
};

export default ItemQuestionSlider;
