import React from 'react';
import Input from '../input/input';
import {Link}  from 'react-router-dom';

const signUpForm = (props) =>{
        return(
        <main>
          <div>
              {/* this needs a change handler */}
            <Input label={"user name"} id={"user"} 
              type={"text"}/>

            <Input label={"email"} id="email" value={props.email}
              type ={"email"} changeHandler={props.changehandler}/>

            <Input label={"password"} id="email" value={props.password}
              type={"password"} changeHandler={props.changehandler}/>

            <Link to="/">
                <button className="submitButton" type="submit" 
                  onClick={props.updateRegistrationHandler}>
                    Sign Up
                </button>
            </Link>
          </div>
        </main>
        );
}

export default signUpForm;