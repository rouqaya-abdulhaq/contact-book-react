import React from 'react';
import Logo from '../logo/logo';
import './header.css'
import Registartion from '../registration/registration';

const Header = (props)=>{
      return(
         <div className="header">
         <div className={props.headerType}>
           <Logo/>
           <Registartion 
           updateHeaderHandler={props.updateHeaderHandler}
           isRegistered={props.isRegistered} />
         </div>
         </div>
       );
     }

    
export default Header;