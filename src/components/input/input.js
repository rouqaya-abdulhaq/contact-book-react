import React from 'react';
import './input.css';


const Input = (props)=>{
    const updateParentState=(event)=>{
        props.onChange(props.id, event.target.value);
    }

    return(
        <div className="inputWrapper">
            <label className="label">{props.label} : </label>
            <input type={props.type} value={props.value} className="inputBox" 
            onChange={updateParentState} 
             required></input>
        </div>
    );
}


export default Input;