import React from 'react';
import './header.css';
import Logo from '../../components/logo/logo';
import Registration from '../../components/registration/registration';
import SignOut from '../../components/sign-out/signOut';

class Header extends React.Component {
    constructor(){
        super();
        this.state = {
            registered : false
        }
    }
    render(){
    if(this.state.registered === false){
        return(
          <div className="registrtionHeader header">
            <Logo/>
            <Registration/> 
          </div>
        );
    }
    return(
        <div className="signOutHeader header">
          <Logo/>
          <SignOut/> 
        </div>
    );
    }
}

export default Header;