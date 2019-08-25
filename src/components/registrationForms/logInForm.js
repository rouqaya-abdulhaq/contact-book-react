import React from 'react';
import Input from '../input/input';
import {Link}  from 'react-router-dom';

const logInForm = (props) =>{
        return(
                <div>
                 <Input label={"email"} id="email" value={props.email}
                     type ={"email"} changeHandler={props.changehandler}/>

                 <Input label={"password"} id="password" value={props.password}
                    type={"password"} changeHandler={props.changehandler}/>

                <Link to="/">
                    <button className="submitButton" 
                      onClick={props.updateRegistrationHandler} type="submit">
                        Log In
                    </button>
                </Link> 
                </div> 
        );
}

export default logInForm;