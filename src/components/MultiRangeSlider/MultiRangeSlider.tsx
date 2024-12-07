
import { useState, ChangeEvent } from 'react';

import './MultiRangeSlider.scss';

type MultiRangeSliderProps = {
    min: number;
    max: number;
    step: number;
    onChange: (values: { min: number; max: number }) => void;
}

const MultiRangeSlider = ({ min, max, onChange, step }: MultiRangeSliderProps) => {
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);





    const handleMinimumValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (value < maxVal) {
            setMinVal(value);
            onChange({ min: value, max: maxVal });
        }
    };

    const handleMaximumValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (value > minVal) {
            setMaxVal(value);
            onChange({ min: minVal, max: value });
        }
        onChange({ min: value, max: maxVal });
    };

    const getPercent = (values: number) => Math.round(((values - min) / (max - min)) * 100);

    return (
        <div className="slider-container">
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={minVal}
                onChange={handleMinimumValueChange}
                className="thumb thumb--left-thumb"

            />
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={maxVal}
                onChange={handleMaximumValueChange}
                className="thumb thumb--right"
            />

            <div className="slider">
                <div className="slider__bar" />
                <div
                    className="slider__between"
                    style={{
                        left: `${getPercent(minVal)}%`,
                        width: `${getPercent(maxVal) - getPercent(minVal)}%`,
                    }}
                />
            </div>

            <div className="values">
                <div className="value">{minVal}</div>
                <div className="value">{maxVal}</div>
            </div>
        </div>
    );
};

export default MultiRangeSlider;
