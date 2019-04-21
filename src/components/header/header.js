import React from 'react';
import './header.css';
import Logo from '../logo/logo';
import Registration from '../../containers/registration/registration';

const Header = (props) =>{
    return(
        <div className="header">
            <Logo/>
            <Registration/>
        </div>
    );

}

export default Header;