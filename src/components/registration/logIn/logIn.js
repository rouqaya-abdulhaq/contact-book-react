import React from 'react';
import Form from '../../../containers/form/form';
import LogInForm from '../registrationForms/logInForm';

        
const LogIn = (props) => {
    return(
        <main className="signLog">
            <p style={{'color' : '#db0000'}}>{props.invalidMsg}</p>
            <Form>
                <LogInForm register={props.register} 
                invalidMsgHandler={props.invalidMsgHandler}
                isRegistered={props.isRegistered}/>
            </Form>
        </main>
    ); 
        
}

export default LogIn;