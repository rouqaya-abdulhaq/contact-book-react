import React from 'react';
import Input from '../input/input';
import {Link}  from 'react-router-dom';

const logInForm = (props) =>{
        return(
            <main>            
                <div>
                 <Input label={"email"} id="email" value={props.email}
                     type ={"email"} changeHandler={props.changehandler}/>

                 <Input label={"password"} id="email" value={props.password}
                    type={"password"} changeHandler={props.changehandler}/>

                <Link to="/">
                    <button className="submitButton" 
                      onClick={props.updateRegistrationHandler} type="submit">
                        Log In
                    </button>
                </Link> 
                </div> 
            </main>
        );
}

export default logInForm;