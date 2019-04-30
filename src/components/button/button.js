import React from 'react';


function Button(props){
    return(
        <div id="buttonWrapper">
           <button 
           className={props.className} 
           type="button" onClick={props.handleClick} >
           {props.value}
           </button>
        </div>
    );
}

export default Button;