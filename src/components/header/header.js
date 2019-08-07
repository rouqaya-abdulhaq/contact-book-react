import React from 'react';
import Logo from '../logo/logo';
import './header.css'
import Registartion from '../registrationButtons/registrationButtons';

const Header = (props)=>{
      return(
         <header className="header">
         <div className={props.headerType}>
           <Logo/>
           <Registartion 
           updateHeaderHandler={props.updateHeaderHandler}
           isRegistered={props.isRegistered} />
         </div>
         </header>
       );
     }

    
export default Header;