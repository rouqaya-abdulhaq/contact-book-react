import React from 'react';
import "../registration/registration.css";
import {Link } from 'react-router-dom';
//should i create a form component for logging and signing
const SignUp = (props) =>{
    return(
        <main>
            <form>
               <label>user name: </label>
               <input type="text" required></input>
 
               <label>email: </label>
               <input type="email" required></input>

               <label>password: </label>
               <input type="password" required></input>

               <Link to="/">
                    <button className="submitButton" type="submit" 
                    onClick={props.updateHeaderHandler}>Sign Up</button>
               </Link>
            </form>
        </main>
    );
}

export default SignUp;