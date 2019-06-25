import React from 'react';
import PopUp from '../popUp/popUp';
import Form from '../../containers/form/form';
/* lot's of code reusing between this and contactlist needs abstracting and a lot
of cleaning 
also needs to edit the contacts list on submition */ 

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            editClicked : false,
            editFormDisplay : "hide"
        }
    }

    editClickedHandler = ()=>{
        this.setState({
            "editClicked" : !this.state.editClicked
         });
    }

    hidePopUpHandler = (state)=>{
        this.setState({[state] : "hide"});
    }

    showPopUpHandler = (state)=>{
        this.setState({[state]: "show"})
    }

    clickEditHandler = () =>{
        this.editClickedHandler();
        this.showPopUpHandler("editFormDisplay");
    }

    render(){
        console.log(this.state);
        return(
            <div>
                <li key={this.props.phoneNumber}>{this.props.firstName + " " + this.props.lastName}</li>
                <button onClick={this.clickEditHandler}>edit</button>
                <PopUp display={this.state.editFormDisplay}>
                    <Form firstName={this.props.firstName} lastName={this.props.lastName}
                     email={this.props.email} phoneNumber={this.props.phoneNumber}
                     onSubmit={this.props.onEdit}>
                        <button onClick={()=>this.hidePopUpHandler("editFormDisplay")}> x </button>
                    </Form>
                </PopUp>
            </div>
        );  
    }
}


export default Contact;