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
                  props.serverErrHandler("INVALID INPUT");
                } 
              }).then((user)=>{
                  if(user){
                    props.register(user)
                  }
              }).catch((err)=>{
                  console.log(err);
              })
      }

        const email = props.values.email ? {
          value :  props.values.email.value,
          isValid : props.values.email.isValid,
          changed : true
        } : {
          value :  "",
          isValid : true,
          changed : false
        }

        const password = props.values.password ? {
          value :  props.values.password.value,
          isValid : props.values.password.isValid,
          changed : true
        } : {
          value :  "",
          isValid : true,
          changed : false
        }

        const user = props.values.user ? {
          value :  props.values.user.value,
          isValid : props.values.user.isValid,
          changed : true
        } : {
          value :  "",
          isValid : true,
          changed : false
        }

        return(
          <div>
            <Input label={"user name"} id={"user"} inputType={"name"}
              type={"text"} changeHandler={props.changehandler}
              isValid={user.isValid} hasChanged={user.changed}/>

            <Input label={"email"} id="email" inputType={"email"} value={props.email}
              type ={"email"} changeHandler={props.changehandler}
              isValid={email.isValid} hasChanged={email.changed}/>

            <Input label={"password"} id="password" inputType={"name"} value={props.password}
              type={"password"} changeHandler={props.changehandler}
              isValid={password.isValid} hasChanged={password.changed}/>

                <button className="submitButton" type="submit" 
                  onClick={()=>fetchUser(email.value,password.value,user.value)}>
                    Sign Up
                </button>
          </div>
        );
}

export default signUpForm;