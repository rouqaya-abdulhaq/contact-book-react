import React from 'react';
import Form from '../../containers/form/form';
import SignUpForm from '../registrationForms/signUpForm';

const SignUp = (props) =>{
    return(
        <main className="signLog">
            <Form>
                <SignUpForm register={props.register}/>
            </Form>
        </main>
    );
}

export default SignUp;