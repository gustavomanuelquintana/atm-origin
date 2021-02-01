import React from 'react';
import './InputFieldPin.css';

function InputFieldPin( {formatNumber, onChange}){

    return (
        <div className ="inputField">
            <input 
                className="input"
                type="input"
                placeholder="**** **** **** ****"
                value= {formatNumber}
                onChange={ (e) => onChange(e.target.value)}
            />
        </div>
    )
}

export default InputFieldPin;