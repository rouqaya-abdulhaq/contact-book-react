import React from 'react';
import Form from '../../../containers/form/form';
import LogInForm from '../registrationForms/logInForm';

        
const LogIn = (props) => {
    return(
        <main className="signLog">
            <p style={{'color' : '#db0000'}}>{props.serverErrMsg}</p>
            <Form>
                <LogInForm register={props.register} 
                serverErrHandler={props.serverErrHandler}
                isRegistered={props.isRegistered}/>
            </Form>
        </main>
    ); 
        
}

export default LogIn;