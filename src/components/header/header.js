import React from 'react';
import Logo from '../logo/logo';
import './header.css'
import RegistrationButtons from '../registrationButtons/registrationButtons';

const Header = (props)=>{
      const headerType = (props.isRegistered) ? "signOutHeader" : "signLogHeader";
      return(
         <header className="header">
         <div className={headerType}>
           <Logo/>
           <RegistrationButtons
           updateRegistrationHandler={props.updateRegistrationHandler}
           isRegistered={props.isRegistered} />
         </div>
         </header>
       );
     }

    
export default Header;