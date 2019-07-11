import React ,{Component} from "react";
import Input from "../../components/input/input";


class Form extends Component{
    constructor(props){
        super(props);
        this.state={
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
        }
        this.baseState = this.state;
        
    }
    
    ChangeHandler = (state, newValue)=>{
        this.setState(
            {
                [state] : newValue
            }
        );
    }

    submitFormHandler = ()=>{
        this.props.onSubmit(this.state);
        this.setState(this.baseState);
    }


    render(){
        return(
            <div className="formWrapper">
                {this.props.children}
              <Input label={"first name"} id="firstName" value={this.state.firstName}
              type={"text"} onChange={this.ChangeHandler}/>

              <Input label={"last name"} id="lastName" value={this.state.lastName}
              type={"text"} onChange={this.ChangeHandler}/>

              <Input label={"email"} id="email" value={this.state.email}
              type={"email"} onChange={this.ChangeHandler}/>

              <Input label={"phone number"} id="phoneNumber" type={"tel"} 
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={this.state.phoneNumber}
              onChange={this.ChangeHandler}/>

              <button onClick={this.submitFormHandler}>submit</button>
            </div>
        );
    }

}

export default Form;

