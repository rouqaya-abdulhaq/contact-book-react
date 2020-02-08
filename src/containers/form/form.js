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

