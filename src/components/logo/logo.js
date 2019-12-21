import React from 'react';
import PersonIcon from'./personIcon/personIcon';
import {Link} from 'react-router-dom';
import './logo.css';

const Logo = (props)=>{
    return(
        <Link to="/">
            <div id="cover" onClick={props.updateRegistrationHandler}>
                <PersonIcon/>      
            </div>
        </Link>
    );

}

export default Logo;