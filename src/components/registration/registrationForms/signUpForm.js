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

        return(
          <div>
            <Input label={"user name"} id={"user"} inputType={"name"}
              type={"text"} changeHandler={props.changehandler}/>

            <Input label={"email"} id="email" inputType={"email"} value={props.email}
              type ={"email"} changeHandler={props.changehandler}/>

            <Input label={"password"} id="password" inputType={"name"} value={props.password}
              type={"password"} changeHandler={props.changehandler}/>

                <button className="submitButton" type="submit" 
                  onClick={()=>fetchUser(props.values.email.value,props.values.password.value,props.values.user.value)}>
                    Sign Up
                </button>
          </div>
        );
}

export default signUpForm;