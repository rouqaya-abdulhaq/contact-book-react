import React from 'react';
import Logo from '../logo/logo';
import './header.css'
import Registartion from '../../containers/registration/registration';

class Header extends React.Component{
  

  render(){
     return(
       //i need to add wich kind of header this is dynamically
        <div className="header signOutHeader">
          <Logo/>
          <Registartion/>
        </div>
      );
    }
    
}

export default Header;