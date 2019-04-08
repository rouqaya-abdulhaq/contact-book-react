import React from 'react';
import './input.css';

function Input(props){
    
    return(
        <div className="inputWrapper">
            <label>{props.label}: </label>
            <input type={props.type} className="inputBox" required></input>
        </div>
    );
}

export default Input;