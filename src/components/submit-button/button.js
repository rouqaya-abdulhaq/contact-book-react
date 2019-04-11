import React from 'react';
import "./button.css";

function Button(props){
    return(
        <div id="buttonWrapper">
           <input type="submit" id="submit-button"
            value="submit" onClick={props.handleSubmit}></input>
        </div>
    );
}

export default Button;