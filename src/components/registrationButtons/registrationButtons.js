import React from 'react';
import {Link } from 'react-router-dom';

const  Registration = (props) => { 
      if(props.isRegistered === true){
        return (
          <div className="signOutButton">
            <Link to="/">
              <button className="navButton" 
              onClick={props.updateRegistrationHandler}>sign out</button>
            </Link>
          </div>
        );
      }
      return (
        <div className="signLogButtons">
          <Link  to="/log-in">
            <button className="navButton">
              log in
            </button>
          </Link>
          <Link to="/sign-up">
            <button className="navButton">
              sign up
            </button>
          </Link>
        </div>
      );
    }

export default Registration;