import React from 'react';
import './popUp.css'; 


const PopUP = (props) =>{
    return(
        <div className={props.display}>
            <div className="popUp">
                {props.children}
            </div>
        </div>
    );
}

export default PopUP;