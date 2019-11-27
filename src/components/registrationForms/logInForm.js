import React from 'react';
import Input from '../input/input';
import {Link}  from 'react-router-dom';

const logInForm = (props) =>{
        const submitLog = () =>{
            props.updateRegistrationHandler();
            fetch("http://localhost:5000/signIn",{
                method : 'POST',
                headers : {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify({
                    email : props.email,
                    password : props.password
                  })
            }).then((res)=>{
                return res.json();
            }).then((text)=>{
                console.log(text);
            }).catch((err)=>{
                console.log(err);
            }) 
        }

        return(
                <div>
                 <Input label={"email"} id="email" value={props.email}
                     type ={"email"} changeHandler={props.changehandler}/>

                 <Input label={"password"} id="password" value={props.password}
                    type={"password"} changeHandler={props.changehandler}/>

                <Link to="/">
                    <button className="submitButton" 
                      onClick={submitLog} type="submit">
                        Log In
                    </button>
                </Link> 
                </div> 
        );
}

export default logInForm;