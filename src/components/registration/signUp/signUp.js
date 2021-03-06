import React from 'react';
import Form from '../../../containers/HOC/form/form';
import SignUpForm from '../registrationForms/signUpForm';

const SignUp = (props) =>{
    
    return(
        <main className="signLog">
            <Form>
                <SignUpForm register={props.register}
                isRegistered={props.isRegistered}
                registerServerError={props.registerServerError}
                isLoading= {props.isLoading}
                isCompleted = {props.isCompleted}/>
            </Form>
        </main>
    );
}

export default SignUp;