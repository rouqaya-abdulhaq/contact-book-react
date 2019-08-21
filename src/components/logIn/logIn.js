import React from 'react';
import "../registrationButtons/registrationButtons.css";
import Form from '../../containers/form/form.js';
import Input from '../input/input';
import {Link}  from 'react-router-dom';

const LogIn = (props) =>{
    return(
          <main>
              <Form>
                  <div>
                     <Input label={"email"} id="email" value={props.email}
                     type ={"email"} onChange={props.changehandler}/>

                     <Input label={"password"} id="email" value={props.password}
                     type={"password"} onChange={props.changehandler}/>

                    <Link to="/">
                     <button className="submitButton" 
                        onClick={props.updateRegistrationHandler} type="submit">
                        Log In
                     </button>
                    </Link> 
                  </div>
              </Form>
          </main>
    );
}

export default LogIn;