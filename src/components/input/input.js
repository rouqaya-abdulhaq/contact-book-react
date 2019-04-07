import React from 'react';
import './input.css';

const Input = () =>{
    return(
        <div className="inputWrapper">
            <label>{this.props.label}</label>
            <input type="text" className="inputBox" required></input>
        </div>
    );
}

export default Input;