import React from 'react';
import Input from '../UI/input/input';

const signUpForm = (props) =>{

        const fetchUser = (email , password, userName) =>{
          fetch("http://localhost:5000/signUp",{
                  method : 'POST',
                  headers : {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                  },
                  body : JSON.stringify({
                    name : userName,
                    email : email,
                    password : password
                    })
              }).then((res)=>{
                      props.registrationHandler();
                      return res.json();
              }).then((user)=>{
                  // console.log(user);
                  props.register(user)
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

                <button className="submitButton" type="submit" 
                  onClick={()=>fetchUser(props.email,props.password,props.user)}>
                    Sign Up
                </button>
          </div>
        );
}

export default signUpForm;