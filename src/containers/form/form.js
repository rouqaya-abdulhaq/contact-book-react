import React ,{Component} from "react";
import Input from "../../components/input/input";


class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            firstName: "",
            lastName:"",
            email: "",
            phoneNumber: ""
        }
    }
    
    handleChange = (state, newValue)=>{
        this.setState(
            {
                [state] : newValue
            }
        );
    }
    
    handleSubmit = ()=>{
        console.log(this.state);
    }

    render(){
        return(
            <div className="formWrapper">
              <Input label={"first name"} id="firstName" value={this.state.firstName}
              type={"text"} onChange={this.handleChange}/>

              <Input label={"last name"} id="lastName" value={this.state.lastName}
              type={"text"} onChange={this.handleChange}/>

              <Input label={"email"} id="email" value={this.state.email}
              type={"email"} onChange={this.handleChange}/>

              <Input label={"phone number"} id="phoneNumber" type={"tel"} 
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={this.state.phoneNumber}
              onChange={this.handleChange}/>

              <button onClick={this.handleSubmit}>submit</button>
            </div>
        );
    }

}

export default Form;

