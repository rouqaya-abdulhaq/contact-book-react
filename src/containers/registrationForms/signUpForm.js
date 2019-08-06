import React , {Component} from 'react';
import Input from '../../components/input/input';
//will be continued in optimization

class signUpForm extends Component{
    constructor(props){
        super(props);
        this.state={
            firstName : "",
            lastName : "",       
            email: "",
            password: "",
        }
    }
    render(){
        return(
            <form>
                <Input/>

            </form>
        );
    }
}

export default signUpForm;