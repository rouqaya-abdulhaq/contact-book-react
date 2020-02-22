import React from 'react';
import Form from '../../../containers/form/form';
import SignUpForm from '../registrationForms/signUpForm';

const SignUp = (props) =>{
    return(
        <main className="signLog">
            <p style={{'color' : '#db0000'}}>{props.serverErrMsg}</p>
            <Form>
                <SignUpForm register={props.register}
                serverErrHandler={props.serverErrHandler}
                isRegistered={props.isRegistered}/>
            </Form>
        </main>
    );
}

export default SignUp;