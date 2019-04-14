import React from 'react';
import icon from'./phone-icon.png';
import './logo.css';

const Logo = (props)=>{
    return(
        <div id="cover">
           <div className="straps"></div>
           <div className="straps"></div>
           <div className="straps"></div> 
           <img id="icon" src={icon} alt="icon"/>       
        </div>
    );

}

export default Logo;