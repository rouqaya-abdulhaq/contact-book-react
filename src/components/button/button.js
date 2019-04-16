import React from 'react';
import "./button.css";

function Button(props){
    return(
        <div id="buttonWrapper">
           <button 
           className="navButton" 
           type="button" onClick={props.handleClick} >
           {props.value}
           </button>
        </div>
    );
}

export default Button;