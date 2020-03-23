import React from 'react';
import './transparentScreen.css';

const screen = (props) =>{
    return (
        <div className="screen">
            {props.children}
        </div>
    );
}

export default screen;