import React from 'react';
import './registration.css';
import SignOut from '../../components/sign-out/signOut';
import SignIn from '../../components/signIn/signIn';
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
        <div>
          <SignOut/>
        </div>
      );
  
    }
}

export default Registration;