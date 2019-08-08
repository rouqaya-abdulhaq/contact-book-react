import React ,{Component} from "react";
import Input from "../../components/input/input";
import './form.css';


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
        this.id = 0;
    }

    submitFormHandler = ()=>{
        // let id =this.generateId();
        this.props.onSubmit(this.state);
        this.setState(this.baseState);
    } 

    /*this is not so good because of the update feature it
     creates a new elemnt with the same id
     the id will be given by the server when the user is posted 
     and then dealed with in the appropriate element*/
    // generateId = () =>{
    //     this.id++;
    //     return this.id;
    // }

    ChangeHandler = (state, newValue)=>{
        this.setState(
            {
                [state] : newValue
            }
        );
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

              <button className="submitButton" onClick={this.submitFormHandler}>
                  submit</button>
            </div>
        );
    }

}

export default Form;

