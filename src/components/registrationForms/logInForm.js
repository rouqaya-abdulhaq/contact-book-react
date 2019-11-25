import React from 'react';
import Input from '../input/input';
import {Link}  from 'react-router-dom';

const logInForm = (props) =>{
        const submitLog = () =>{
            props.updateRegistrationHandler();
            fetch("http://localhost:5000/mock",{
                method : 'get',
            }).then((res)=>{
                return res.text()
            }).then((text)=>{
                console.log(text);
            }).catch((err)=>{
                console.log(err);
            }) 
            console.log("end of submit");
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