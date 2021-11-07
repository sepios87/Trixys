import { Slider } from 'antd';
import 'antd/dist/antd.css';
import { useState } from 'react';

const ItemQuestionSlider = ({response, onFinishedQuestion}) => {
    const [valueSlider, setValueSlider] = useState(response.min);

    return (
        <div>
            <p>{valueSlider}</p>
            <Slider
                min={response.min}
                max={response.max}
                value={valueSlider}
                onChange={setValueSlider}
                trackStyle={{ backgroundColor: '#f6c952' }}
                handleStyle={{ borderColor: '#f6c952' }}
            />
            <p onClick={() => onFinishedQuestion(valueSlider*response.point)}>Valider</p>
        </div>
    );
};

export default ItemQuestionSlider;
