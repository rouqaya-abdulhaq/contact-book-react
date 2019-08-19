import React from 'react';
import "../registrationButtons/registrationButtons.css";
import {Link } from 'react-router-dom';

const LogIn = (props) =>{
    return(
          <main>
              <form>
                 <label>email</label>
                 <input type="email" required></input>

                 <label>password</label>
                 <input type="password" required></input>
                 
                 <Link to="/">
                    <button className="submitButton" 
                        onClick={props.updateRegistrationHandler} type="submit">
                        Log In
                    </button>
                 </Link>
              </form>
          </main>
    );
}

export default LogIn;