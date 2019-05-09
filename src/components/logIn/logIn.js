import React from 'react';
import "../../containers/registration/registration.css";

const LogIn = () =>{
    return(
        <div>
          <main id="logInWrapper">
              <form id="logInForm">
                 <label>email</label>
                 <input type="email" required></input>

                 <label>password</label>
                 <input type="password" required></input>

                 <button className="submitButton" type="submit">Log In</button>
              </form>
          </main>
        </div>
    );
}

export default LogIn;