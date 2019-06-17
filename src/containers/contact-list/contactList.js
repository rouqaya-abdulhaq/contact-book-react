import React from 'react';
import "./contactList.css";
import PopUp from '../../components/popUp/popUp';
import Contact from '../../components/contact/contact';
import Form from '../form/form';

class ContactList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            contacts : [],
            addClicked : false,
            popUpDisplay : "hide"
        }
    }

    addContactHandler = ()=>{
        this.setState({
           "addClicked" : !this.state.addClicked
        });
    }

    hidePopUpHandler = ()=>{
        this.setState({"popUpDisplay" : "hide"});
    }

    showPopUpHandler = ()=>{
        this.setState({"popUpDisplay": "show"})
    }

    clickAddHandler = () =>{
        this.addContactHandler();
        this.showPopUpHandler();
    }

    onSubmitHandler = (newContact) =>{
        this.setState({"contacts" : [...this.state.contacts, newContact]});
        this.hidePopUpHandler();
    }
    
    
    render(){
        return(
            <div className="contactList">
                <p className="title">contacts :</p>
                <button className="addButton" onClick={this.clickAddHandler}> + </button>
                <PopUp display={this.state.popUpDisplay}>
                    <Form onSubmit={this.onSubmitHandler}>
                        <button onClick={this.hidePopUpHandler}> x </button>
                    </Form>
                </PopUp>
                {this.state.contacts.map((contact) =>
                     <Contact phoneNumber={contact.phoneNumber} 
                     firstName={contact.firstName} 
                     lastName={contact.lastName}/>)}
            </div>
        );
    }
}

export default ContactList;
