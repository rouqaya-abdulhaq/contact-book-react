import React from 'react';
import Form from '../../containers/form/form';
import LogInForm from '../registrationForms/logInForm';

        
const LogIn = (props) =>{
        return(
            <main className="signLog">
                <Form>
                    <LogInForm register={props.register} 
                    updateRegistrationHandler={props.updateRegistrationHandler}/>
                </Form>
            </main>
    );
}

export default LogIn;