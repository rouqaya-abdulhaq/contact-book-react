import React from 'react';
import "../registration/registration.css";

const LogIn = () =>{
    return(
        <div>
          <main id="logInWrapper">
              <form id="logInForm">
                 <label>email</label>
                 <input type="email" required></input>

                 <label>password</label>
                 <input type="password" required></input>
                 {/* this button should call the updateHeaderHandler once clicked */}
                 <button className="submitButton" type="submit">Log In</button>
              </form>
          </main>
        </div>
    );
}

export default LogIn;