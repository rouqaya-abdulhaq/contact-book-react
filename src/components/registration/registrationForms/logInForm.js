import React from 'react';
import Input from '../../UI/input/input';
import SubmitBtn from '../../UI/submitBtn/submitBtn';
import {logInFetchCall} from './fetchCalls';

const logInForm = (props) => {
    const email = props.assigninput(props.values.email);
    const password = props.assigninput(props.values.password);

    const userCredintials = {
        email : email.value,
        password : password.value
    }

    return(
        <div>
            <Input label={"email"} id="email" inputType={"email"} value={props.email}
                type ={"email"} changeHandler={props.changehandler}
                isValid={email.isValid} hasChanged={email.changed}/>


            <Input label={"password"} id="password" inputType={"password"} value={props.password}
                type={"password"} changeHandler={props.changehandler}
                isValid={password.isValid} hasChanged={password.changed}/>
            
            <SubmitBtn value={"Log In"} 
            clickHandler={()=>logInFetchCall(userCredintials,props.register,props.invalidMsgHandler,props.registerServerError)}
            infoArr={[email,password]}
            />
        </div> 
    );
}

export default logInForm;