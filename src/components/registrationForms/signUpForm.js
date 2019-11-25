import React from 'react';
import Input from '../input/input';
import {Link}  from 'react-router-dom';

const signUpForm = (props) =>{
        const onSubmit = () =>{
          props.updateRegistrationHandler();
          fetch('/signUp').then((req,res)=>{
            console.log(req);
          }).catch((err)=>{
            console.log(err);
          })
        }
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
                  onClick={onSubmit}>
                    Sign Up
                </button>
            </Link>
          </div>
        );
}

export default signUpForm;