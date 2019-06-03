import React from 'react';
import Logo from '../../components/logo/logo';
import './header.css'
import Registartion from '../../components/registration/registration';

class Header extends React.Component{
  //should probably move this to the components again 
    render(){
      return(
         <div className="header">
         <div className={this.props.headerType}>
           <Logo/>
           <Registartion 
           updateHeaderHandler={this.props.updateHeaderHandler}
           isRegistered={this.props.isRegistered} />
         </div>
         </div>
       );
     }
    }

    
export default Header;