import React from 'react';
import './InputField.css';

function InputField( {formatNumber, onChange}){

    return (
        <div className ="inputField">
            <input 
                className="input"
                type="input"
                placeholder=" **** **** **** **** "
                value= {formatNumber}
                onChange={ (e) => onChange(e.target.value)}
            />
        </div>
    )
}

export default InputField;