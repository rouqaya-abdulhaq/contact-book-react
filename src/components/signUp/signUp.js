import React from 'react';
import Form from '../../containers/form/form';
import SignUpForm from '../registrationForms/signUpForm';

const SignUp = (props) =>{
    return(
        <main className="signLog">
            <Form>
                <SignUpForm updateRegistrationHandler={props.updateRegistrationHandler}/>
            </Form>
        </main>
    );
}

export default SignUp;