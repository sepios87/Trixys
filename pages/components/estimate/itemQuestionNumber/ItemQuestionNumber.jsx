import { useState } from 'react';
import classes from './ItemQuestionNumber.module.scss';

const ItemQuestionNumber = ({ min, max, point, onFinishedQuestion }) => {
    const [valueSlider, setValueSlider] = useState(min);

    return (
        <div className={classes.itemQuestionNumber}>
            <div>
                <p
                    onClick={() =>
                        valueSlider > min && setValueSlider(valueSlider - 1)
                    }
                    className={classes.itemQuestionNumber__button}
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
                    className={classes.itemQuestionNumber__button}
                >
                    +
                </p>
            </div>
            <p
                className={classes.itemQuestionNumber__validate}
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

export default ItemQuestionNumber;
