import React from 'react';
import Input from '../../UI/input/input';

const signUpForm = (props) =>{

        const email = props.assigninput(props.values.email);
        const password = props.assigninput(props.values.password);
        const user = props.assigninput(props.values.user);

        const registerUser = (email , password, userName) =>{
          if(email.isValid && password.isValid && userName.isValid
            && email.hasChanged && password.hasChanged && userName.hasChanged ){
            fetchUser(email.value,password.value,userName.value);
          }else{
            props.serverErrHandler("INVALID INPUT");
          }
        }

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
                onClick={()=>registerUser(email,password,user)}>
                  Sign Up
              </button>
        </div>
      );
}

export default signUpForm;