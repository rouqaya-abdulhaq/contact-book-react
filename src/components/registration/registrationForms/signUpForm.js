import React from 'react';
import Input from '../../UI/input/input';
import SubmitBtn from '../../UI/submitBtn/submitBtn';
import {signUpFetchCall} from './fetchCalls';


const signUpForm = (props) =>{

    const email = props.assigninput(props.values.email);
    const password = props.assigninput(props.values.password);
    const firstName = props.assigninput(props.values.firstName);
    const lastName = props.assigninput(props.values.lastName);

    const user = {
      firstName : firstName.value,
      lastName : lastName.value,
      email : email.value,
      password : password.value
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
        clickHandler={()=>signUpFetchCall(user,props.register,props.registerServerError)}
        infoArr={[email,password,firstName,lastName]}/>
    </div>
  );
}

export default signUpForm;