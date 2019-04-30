import React from 'react';
import PersonIcon from'./personIcon/personIcon';
import './logo.css';

const Logo = (props)=>{
    return(
        <div id="cover">
           <PersonIcon/> 
           <div className="straps"></div>
           <div className="straps"></div>
           <div className="straps"></div>      
        </div>
    );

}

export default Logo;