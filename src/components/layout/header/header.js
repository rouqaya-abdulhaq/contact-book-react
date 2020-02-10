import React from 'react';
import Logo from '../../UI/logo/logo';
import './header.css'
import NavButtons from '../../UI/navButtons/navButtons';

const Header = (props)=>{
      const headerType = (props.isRegistered) ? "signOutHeader" : "signLogHeader";
      return(
         <header className="header">
         <div className={headerType}>
           <Logo unregisterHandler={props.unregisterHandler}/>
           <NavButtons
           unregisterHandler={props.unregisterHandler}
           isRegistered={props.isRegistered} />
         </div>
         </header>
       );
     }

    
export default Header;