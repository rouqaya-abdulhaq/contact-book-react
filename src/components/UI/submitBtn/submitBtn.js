import React from 'react';
import './submitBtn.css';

const SubmitBtn = (props) =>{

    const validityArr = props.infoArr.map((infoObj)=>{
        if(infoObj.isValid === false && infoObj.changed === true){
            return false;
        }else{
            return true;
        }
    });

    let btnColor = "";

    for (const value in validityArr){
        if (validityArr[value] === false){
            btnColor = "disapled";
            break;
        }
    }

    const submitInfo = () =>{
        if(btnColor !== "disapled"){
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