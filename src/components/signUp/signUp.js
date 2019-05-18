import React from 'react';
import "../../containers/registration/registration.css";

const SignUp = () =>{
    return(
        <div>
            <form id="signUpForm">
               <label>user name: </label>
               <input type="text" required></input>
 
               <label>email: </label>
               <input type="email" required></input>

               <label>password: </label>
               <input type="password" required></input>
                {/* this button should call the updateHeaderHandler once clicked */}
               <button className="submitButton" type="submit">Sign Up</button> 
            </form>
        </div>
    );
}

export default SignUp;