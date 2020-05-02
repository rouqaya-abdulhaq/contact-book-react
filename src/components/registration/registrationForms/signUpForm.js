import React from 'react';
import Input from '../../UI/input/input';
import SubmitBtn from '../../UI/submitBtn/submitBtn';


const signUpForm = (props) =>{

        const email = props.assigninput(props.values.email);
        const password = props.assigninput(props.values.password);
        const firstName = props.assigninput(props.values.firstName);
        const lastName = props.assigninput(props.values.lastName);

        const fetchUser = (email , password, firstName, lastName) =>{
          fetch("http://localhost:5000/signUp",{
                  method : 'POST',
                  headers : {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                  },
                  body : JSON.stringify({
                    firstName : firstName,
                    lastName : lastName,
                    email : email,
                    password : password
                    })
              }).then((res)=>{
                if(res.ok){
                  return res.json()
                }else{
                  props.invalidMsgHandler("INVALID INPUT");
                } 
              }).then((user)=>{
                  if(user){
                    props.register(user)
                  }
              }).catch((err)=>{
                  props.registerServerError("unable to register user")
              })
      }

      return(
        <div>
          <Input label={"first name"} id={"firstName"} inputType={"name"}
            type={"text"} changeHandler={props.changehandler}
            isValid={firstName.isValid} hasChanged={firstName.changed}/>

          <Input label={"last name"} id={"lastName"} inputType={"name"}
            type={"text"} changeHandler={props.changehandler}
            isValid={lastName.isValid} hasChanged={lastName.changed}/>

          <Input label={"email"} id="email" inputType={"email"} value={props.email}
            type ={"email"} changeHandler={props.changehandler}
            isValid={email.isValid} hasChanged={email.changed}/>

          <Input label={"password"} id="password" inputType={"password"} value={props.password}
            type={"password"} changeHandler={props.changehandler}
            isValid={password.isValid} hasChanged={password.changed}/>

          <SubmitBtn value={"Sign Up"} 
            clickHandler={()=>fetchUser(email.value,password.value,firstName.value,lastName)}
            infoArr={[email,password,firstName,lastName]}/>
        </div>
      );
}

export default signUpForm;