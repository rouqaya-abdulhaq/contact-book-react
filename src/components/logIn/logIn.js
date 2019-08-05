import React from 'react';
import "../registration/registration.css";
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
                    onClick={props.updateHeaderHandler} type="submit">Log In</button>
                 </Link>
              </form>
          </main>
    );
}

export default LogIn;