import React ,{Component} from "react";
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
                {React.cloneElement(this.props.children, 
                    { firstname: this.state.firstName ,
                      lastname : this.state.lastName,
                      email : this.state.email,
                      phonenumber : this.state.phoneNumber,
                      changehandler : this.ChangeHandler })}
              <button className="submitButton" onClick={this.submitFormHandler}>
                  submit
              </button>
            </div>
        );
    }

}

export default Form;

