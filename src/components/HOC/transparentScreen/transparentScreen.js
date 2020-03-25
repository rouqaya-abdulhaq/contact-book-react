import React from 'react';
import './transparentScreen.css';

const screen = (props) =>{
    return (
        <div className="screen">
            <p className="msg">{props.msg}</p>
            {props.children}
        </div>
    );
}

export default screen;