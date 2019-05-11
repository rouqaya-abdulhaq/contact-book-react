import React from 'react';
import './registration.css';
import Button from '../../components/button/button';
import {Link } from 'react-router-dom';


class Registration extends React.Component {
    constructor(){
        super();
        this.state = {
            isRregistered : true
        }
    }

    render(){
      if(this.state.isRregistered === true){
        return (
          <div className="signOut">
            <Link to="/"><Button className='navButton' value="sign out"/></Link>
          </div>
        );
      }
      return (
        <div className="registartion">
          <Link to="/log-in"><Button className='navButton' value="log In"/></Link>
          <Link to="/sign-up"><Button className='navButton' value="sign Up"/></Link>
        </div>
      );
    }
}

export default Registration;