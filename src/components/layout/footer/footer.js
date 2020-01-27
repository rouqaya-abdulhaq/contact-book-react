import React from 'react';
import './footer.css';

const Footer = (props)=>{
    return(
        <div className="footer" >
            <footer>designed by {props.author}</footer>
        </div>
    );
}

export default Footer;