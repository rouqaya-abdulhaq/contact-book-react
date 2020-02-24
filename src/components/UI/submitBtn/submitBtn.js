import React from 'react';
import './submitBtn.css';

const SubmitBtn = (props) =>{

    const submitInfo = () =>{
        props.infoArr.map((infoObj)=>{
            if(!infoObj.isValid && infoObj.hasChanged){
                //TURN THE BUTTON RED
                //DISPLAY INVALID MESSAGE
                return false;
            }else{
                //TURN BUTTON GREEN 
                //PREFORM SUBMIT HANDLER
                return true;
            }
        });
    }

    return(
        <button className={"submitButton " + props.styleClass} onClick={submitInfo} 
        type="submit">
            {props.value}
        </button>
    );
}

export default SubmitBtn;