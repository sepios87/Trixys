import { useState } from 'react';
import classes from '../Estimate.module.scss';

const ItemQuestionSlider = ({ response, onFinishedQuestion }) => {
    const [valueSlider, setValueSlider] = useState(response.min);

    return (
        <div className={classes.itemQuestionSlider}>
            <p>{valueSlider}</p>
            <input
                className={classes.slider}
                type="range"
                onChange={(e) => setValueSlider(e.target.value)}
                value={valueSlider}
                min={response.min}
                max={response.max}
            />
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
