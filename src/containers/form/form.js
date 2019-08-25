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
                password : "",
                // i want user to be first + last name
                user: "",
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
        const children = React.Children.map(this.props.children, child =>{
            return React.cloneElement(child, {
                firstname: this.state.firstName ,
                lastname : this.state.lastName,
                email : this.state.email,
                phonenumber :  this.state.phoneNumber,
                password : this.state.password,
                user : this.state.user,
                changehandler : this.ChangeHandler, 
                submitformhandler: this.submitFormHandler 
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

