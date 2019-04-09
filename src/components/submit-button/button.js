import React from 'react';
import "./button.css";

function Button(props){
    return(
        <div id="buttonWrapper">
           <input type="submit" id="submit-button" value="submit"></input>
        </div>
    );
}

export default Button;