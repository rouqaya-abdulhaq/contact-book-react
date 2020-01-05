import React from 'react';
import Form from '../../containers/form/form';
import LogInForm from '../registrationForms/logInForm';

        
class LogIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            errorMsg : null,
        }
    }

    falseCredintialsHandler = () =>{
        this.setState({errorMsg : "user not found"});
    }

    render(){
        return(
            <main className="signLog">
                <p style={{'color' : '#db0000'}}>{this.state.errorMsg}</p>
                <Form>
                    <LogInForm register={this.props.register} 
                    falseCredintialsHandler = {this.falseCredintialsHandler}
                    registrationHandler={this.props.registrationHandler}
                    isRegistered={this.props.isRegistered}/>
                </Form>
            </main>
    ); 
    }
        
}

export default LogIn;