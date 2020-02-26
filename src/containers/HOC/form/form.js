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

    assignInput = (input) =>{
        return input ? {
            value : input.value,
            isValid : input.isValid,
            changed : true
        } : {
            value :  "",
            isValid : true,
            changed : false
        }
    }

    submitFormHandler = ()=>{
        this.props.onSubmit(this.state.values);
        this.setState(this.baseState);
    } 

    
    ChangeHandler = (state, newValue, isValid)=>{
        this.setState(prevState =>({
            values : {
                ...prevState.values,
                [state] : {
                    value : newValue, 
                    isValid : isValid,
                    hasChanged : true,
                }
            }
        })
        );
    }


    render(){
        const children = React.Children.map(this.props.children, child =>{
            return React.cloneElement(child, {
                changehandler : this.ChangeHandler, 
                submitformhandler: this.submitFormHandler ,
                assigninput : this.assignInput,
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

