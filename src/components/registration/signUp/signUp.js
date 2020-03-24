import React from 'react';
import Form from '../../../containers/HOC/form/form';
import SignUpForm from '../registrationForms/signUpForm';

const SignUp = (props) =>{
    return(
        <main className="signLog">
            <p style={{'color' : '#db0000'}}>{props.invalidMsg}</p>
            <Form>
                <SignUpForm register={props.register}
                invalidMsgHandler={props.invalidMsgHandler}
                isRegistered={props.isRegistered}
                registerServerError={props.registerServerError}/>
            </Form>
        </main>
    );
}

export default SignUp;