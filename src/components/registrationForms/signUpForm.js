import React from 'react';
import Input from '../input/input';
import {Link}  from 'react-router-dom';

const signUpForm = (props) =>{
        return(
          <div>
              {/* this has a user state for now it will be first + last name later */}
            <Input label={"user name"} id={"user"} 
              type={"text"} changeHandler={props.changehandler}/>

            <Input label={"email"} id="email" value={props.email}
              type ={"email"} changeHandler={props.changehandler}/>

            <Input label={"password"} id="password" value={props.password}
              type={"password"} changeHandler={props.changehandler}/>

            <Link to="/">
                <button className="submitButton" type="submit" 
                  onClick={props.updateRegistrationHandler}>
                    Sign Up
                </button>
            </Link>
          </div>
        );
}

export default signUpForm;