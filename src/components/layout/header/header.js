import React from 'react';
import Logo from '../../logo/logo';
import './header.css'
import RegistrationButtons from '../../registrationButtons/registrationButtons';

const Header = (props)=>{
      const headerType = (props.isRegistered) ? "signOutHeader" : "signLogHeader";
      return(
         <header className="header">
         <div className={headerType}>
           <Logo unregisterHandler={props.unregisterHandler}/>
           <RegistrationButtons
           unregisterHandler={props.unregisterHandler}
           isRegistered={props.isRegistered} />
         </div>
         </header>
       );
     }

    
export default Header;