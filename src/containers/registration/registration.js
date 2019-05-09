import React from 'react';
import './registration.css';
import Button from '../../components/button/button';
import SignOut from '../../components/sign-out/signOut';
import SignUp from '../../components/signUp/signUp';
import LogIn from '../../components/logIn/logIn';

class Registration extends React.Component {
    constructor(){
        super();
        this.state = {
            isRregistered : false
        }
    }
    render(){
      return (
        <div className="signOut">
             <Button className='navButton' value="sign out"/>
        </div>
      );
  
    }
}

export default Registration;