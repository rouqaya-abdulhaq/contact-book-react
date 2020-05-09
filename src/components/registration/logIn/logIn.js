import React from 'react';
import Form from '../../../containers/HOC/form/form';
import LogInForm from '../registrationForms/logInForm';

        
const LogIn = (props) => {
    return(
        <main className="signLog">
            <Form>
                <LogInForm register={props.register} 
                isRegistered={props.isRegistered}
                registerServerError={props.registerServerError}/>
            </Form>
        </main>
    ); 
        
}

export default LogIn;