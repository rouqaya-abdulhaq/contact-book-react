import React from "react";
import "./card.css";
import Form from '../../containers/form/form';
//need to set the correct path and change this into a wrapper
class Card extends React.Component{
    constructor(){
        super();
        this.state = {
            name : "",
            phoneNumber : "",
            email : ""
        }
    }

    handleSave = (fullName,phoneNumber,email)=>{
        this.setState({
            "name" : fullName,
            "phoneNumber" : phoneNumber,
            "email" : email
        });
    }
    render(){
        return(
            <div className="cardWrapper">
            <Form handleSave={this.handleSave}/>
            </div>
        ); 
    }
}

export default Card;