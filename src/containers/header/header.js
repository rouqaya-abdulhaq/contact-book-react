import React from 'react';
import Logo from '../../components/logo/logo';
import './header.css'
import Registartion from '../../components/registration/registration';

class Header extends React.Component{
    constructor(){
      super();
      this.state = {
        headerType: "signOutHeader",
      }
    }
    
    updateHeaderType= () =>{
      let newHeaderType = (this.state.headerType === "signOutHeader") ? "registrationHeader" : "signOutHeader";
      this.setState({headerType : newHeaderType})

    }

    updateHeaderHandler = () =>{
      this.props.updateRegistrationHandler();
      this.updateHeaderType();
    }

    render(){
      return(
         <div className="header">
         <div className={this.state.headerType}>
           <Logo/>
           <Registartion 
           onClick={this.updateHeaderHandler}
           isRegistered={this.props.isRegistered} />
         </div>
         </div>
       );
     }
    }

    

export default Header;