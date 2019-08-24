import React from 'react';
import "../registrationButtons/registrationButtons.css";
import Form from '../../containers/form/form';
import LogInForm from '../registrationForms/logInForm';

        
const LogIn = (props) =>{
    
    return(
        <main>
         <Form>
            <LogInForm/>
         </Form>
        </main>
    );
}

export default LogIn;