import { Slider } from 'antd';
import { useState } from 'react';
import classes from '../Estimate.module.scss';

const ItemQuestionSlider = ({ response, onFinishedQuestion }) => {
    const [valueSlider, setValueSlider] = useState(response.min);

    return (
        <div className={classes.itemQuestionSlider}>
            <p>{valueSlider}</p>
            <Slider
                min={response.min}
                max={response.max}
                value={valueSlider}
                onChange={setValueSlider}
                trackStyle={{ backgroundColor: '#f6c952' }}
                handleStyle={{ borderColor: '#f6c952' }}
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
