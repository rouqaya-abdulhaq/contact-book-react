import React from 'react';
import "../registrationButtons/registrationButtons";
import Form from '../../containers/form/form';
import SignUpForm from '../registrationForms/signUpForm';

const SignUp = (props) =>{
    return(
        <main>
            <Form>
                <SignUpForm/>
            </Form>
        </main>
    );
}

export default SignUp;