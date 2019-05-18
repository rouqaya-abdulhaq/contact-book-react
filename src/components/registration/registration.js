import React from 'react';
import './registration.css';
import {Link } from 'react-router-dom';


const  Registration = (props) => { 
      if(props.isRegistered === true){
        return (
          <div className="signOut">
            <Link to="/log-in">
              <button className="navButton" 
              onClick={props.onClick}>sign out</button>
            </Link>
          </div>
        );
      }
      return (
        <div className="registartion">
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