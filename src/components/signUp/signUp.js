import React from 'react';
import "../registrationButtons/registrationButtons";
import Input from '../input/input';
import Form from '../../containers/form/form.js';
import {Link } from 'react-router-dom';
//should i create a form component for logging and signing
const SignUp = (props) =>{
    return(
        <main>
              <Form>
                  <div>
                  <Input label={"user name"} id={"user"} 
                  type={"text"}/>

                 <Input label={"email"} id="email" value={props.email}
                 type ={"email"} onChange={props.changehandler}/>

                 <Input label={"password"} id="email" value={props.password}
                 type={"password"} onChange={props.changehandler}/>

                <Link to="/">
                    <button className="submitButton" type="submit" 
                      onClick={props.updateRegistrationHandler}>
                     Sign Up
                    </button>
               </Link>
              </div>
            </Form>
        </main>
    );
}

export default SignUp;