import React ,{Component} from "react";
import './form.css';


class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            values : {}
        }
        this.baseState = this.state;
    }

    submitFormHandler = ()=>{
        this.props.onSubmit(this.state.values);
        this.setState(this.baseState);
    } 

    ChangeHandler = (state, newValue)=>{
        this.setState(prevState =>({
            values : {
                ...prevState.values,
                [state] : newValue
            }
        })
        );
    }


    render(){
        const children = React.Children.map(this.props.children, child =>{
            return React.cloneElement(child, {
                // firstname: this.state.firstName ,
                // lastname : this.state.lastName,
                // email : this.state.email,
                // phonenumber :  this.state.phoneNumber,
                // password : this.state.password,
                // user : this.state.user,
                changehandler : this.ChangeHandler, 
                submitformhandler: this.submitFormHandler ,
                values : this.state.values
            });
        });
        return(
            <div className="formWrapper">
                {children}
            </div>
        );
    }

}

export default Form;

