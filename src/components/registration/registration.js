import React from 'react';
import './registration.css';
import {Link } from 'react-router-dom';

//the signout button and log sign buttons styles are in header css while the registration
//styles only the form and it's elements it makes no sense  
const  Registration = (props) => { 
      if(props.isRegistered === true){
        return (
          <div className="signOutButton">
            <Link to="/log-in">
              <button className="navButton" 
              onClick={props.updateHeaderHandler}>sign out</button>
            </Link>
          </div>
        );
      }
      return (
        <div className="signLogButtons">
          <Link  to="/log-in">
            <button className="navButton" >log in</button>
          </Link>
          <Link to="/sign-up">
            <button className="navButton" >sign up</button>
          </Link>
        </div>
      );
    }

export default Registration;