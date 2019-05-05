import React from 'react';
import Logo from '../logo/logo';
import './header.css'
import Registartion from '../../containers/registration/registration';

class Header extends React.Component{
  

  render(){
     return(
        <div className="header signOutHeader">
          <Logo/>
          <Registartion/>
        </div>
      );
    }
    
}

export default Header;