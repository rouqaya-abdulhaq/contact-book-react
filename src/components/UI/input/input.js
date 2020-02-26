import React from 'react';
import './input.css';


const Input = (props)=>{

    const checkValidInputHandler = (InputType, inputValue) =>{
        switch(InputType) {
            case "name" :
                if(inputValue.match(/^[A-Za-z]+$/)){
                    return true;
                }
                return false;
            case "email" :
                if(inputValue.match(/\S+@\S+\.\S+/)){
                    return true;
                }
                return false;
            case "phoneNumber" :
                if(inputValue.match(/^[(]?[0-9]{3}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{4,6}$/)){
                    return true;
                }
                return false;
            case "password" :
                if(inputValue.match(/^\w+$/)){
                    return true;
                }
                return false;
            default :
                return false;
        }
    }

    const updateParentState=(event)=>{
        const isValid = checkValidInputHandler(props.inputType,event.target.value);
        props.changeHandler(props.id, event.target.value,isValid);
    }

    let styleClass = props.hasChanged ? props.isValid? "rightCredintials" : "wrongCredintials" : ""

    return(
        <div className="inputWrapper">
            <label className="label">{props.label} : </label>
            <input type={props.type} value={props.value} className={"inputBox " + styleClass} 
            onChange={updateParentState} 
             required></input>
        </div>
    );
}


export default Input;