import React from 'react';
import Input from '../../UI/input/input';

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
                if(res.ok){
                  return res.json()
                }else{
                  props.wrongCredintialsHandler();
                } 
              }).then((user)=>{
                  if(user){
                    props.register(user)
                  }
              }).catch((err)=>{
                  console.log(err);
              })
      }

        const validEmail = props.values.email === undefined ? true : props.values.email.isValid;
        const emailChanged = props.values.email === undefined ? false : props.values.email.hasChanged;

        const validPassword = props.values.password === undefined ? true : props.values.password.isValid;
        const passwordChanged = props.values.password === undefined ? false : props.values.password.hasChanged;

        const validUser = props.values.user === undefined ? true : props.values.user.isValid;
        const userChanged = props.values.user === undefined ? false : props.values.user.hasChanged;

        return(
          <div>
            <Input label={"user name"} id={"user"} inputType={"name"}
              type={"text"} changeHandler={props.changehandler}
              isValid={validUser} hasChanged={userChanged}/>

            <Input label={"email"} id="email" inputType={"email"} value={props.email}
              type ={"email"} changeHandler={props.changehandler}
              isValid={validEmail} hasChanged={emailChanged}/>

            <Input label={"password"} id="password" inputType={"name"} value={props.password}
              type={"password"} changeHandler={props.changehandler}
              isValid={validPassword} hasChanged={passwordChanged}/>

                <button className="submitButton" type="submit" 
                  onClick={()=>fetchUser(props.values.email.value,props.values.password.value,props.values.user.value)}>
                    Sign Up
                </button>
          </div>
        );
}

export default signUpForm;