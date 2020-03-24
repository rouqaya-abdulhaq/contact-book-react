import React from 'react';
import Form from '../../../containers/HOC/form/form';
import LogInForm from '../registrationForms/logInForm';

        
const LogIn = (props) => {
    return(
        <main className="signLog">
            <p style={{'color' : '#db0000'}}>{props.invalidMsg}</p>
            <Form>
                <LogInForm register={props.register} 
                invalidMsgHandler={props.invalidMsgHandler}
                isRegistered={props.isRegistered}
                registerServerError={props.registerServerError}/>
            </Form>
        </main>
    ); 
        
}

export default LogIn;