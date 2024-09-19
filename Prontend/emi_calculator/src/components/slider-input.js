import React from 'react';

function SliderInput(  
    title,
    state,
    min,
    max,
    onChange,
    labelMin,
    labelMax,
    underlineTitle
) {
    return (
        <React.Fragment>
            <span className="title">{title}</span>
            {state > 0 && (
                <span className='title' style={{ testDecoration: 'underline' }}>
                    {underlineTitle}
                </span>
            )}
            <input 
                type="range"
                value={state}
                min={min}
                max={max}
                onChange={onChange}
                className='slider'
            />
            <div className='lables'>
                <label>{labelMin}</label>
                <b>state</b>
                <label>{labelMax}</label>
            </div>
        </React.Fragment>
    );
}

export default SliderInput;