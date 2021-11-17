import { useState } from 'react';
import classes from '../Estimate.module.scss';

const ItemQuestionSlider = ({ response, onFinishedQuestion }) => {
    const [valueSlider, setValueSlider] = useState(response.min);

    return (
        <div className={classes.itemQuestionSlider}>
            <p
                onClick={() =>
                    valueSlider > response.min &&
                    setValueSlider(valueSlider - 1)
                }
                className={classes.buttonSlider}
            >
                -
            </p>
            <p className={classes.value}>{valueSlider}</p>
            <p
                onClick={() =>
                    valueSlider < response.max
                        ? setValueSlider(valueSlider + 1)
                        : null
                }
                className={classes.buttonSlider}
            >
                +
            </p>
            <p
                className={classes.validate}
                onClick={() => {
                    onFinishedQuestion(valueSlider * response.point);
                    setValueSlider(0);
                }}
            >
                Valider
            </p>
        </div>
    );
};

export default ItemQuestionSlider;
