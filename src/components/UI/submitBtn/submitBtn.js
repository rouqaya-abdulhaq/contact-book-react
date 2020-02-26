import React from 'react';
import './submitBtn.css';

const SubmitBtn = (props) =>{

    const validityArr = props.infoArr.map((infoObj)=>{
        if(infoObj.isValid === true && infoObj.changed === true){
            return true;
        }else{
            return false;
        }
    });

    let btnColor = "";

    for (const value in validityArr){
        if (validityArr[value] === false){
            btnColor = "disapled";
            break;
        }else{
            btnColor = "enabled";
        }
    }

    const submitInfo = () =>{
        if(btnColor !== "disapled" && btnColor !== ""){
            props.clickHandler()
        }
    }

    return(
        <button className={"submitButton " + btnColor} onClick={submitInfo} 
        type="submit">
            {props.value}
        </button>
    );
}

export default SubmitBtn;