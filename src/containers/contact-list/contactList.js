import React from 'react';
import "./contactList.css";
import PopUp from '../../components/popUp/popUp';
import Contact from '../../components/contact/contact';
import Form from '../form/form';

/*in order to edit each contact i need a handler that displays the targeted
contact edit onclick then a form will reappear that has all of the previous info
and once changed and resubmitted the contacts array must be updated with the new info */

class ContactList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            contacts : [],
            addClicked : false,
            addContactDisplay : "hide",
        }
    }
    
    addContactHandler = ()=>{
        this.setState({
           "addClicked" : !this.state.addClicked
        });
    }

    hidePopUpHandler = (state)=>{
        this.setState({[state] : "hide"});
    }

    showPopUpHandler = (state)=>{
        this.setState({[state]: "show"})
    }

    clickAddHandler = () =>{
        this.addContactHandler();
        this.showPopUpHandler("addContactDisplay");
    }

    onSubmitHandler = (newContact) =>{
        this.setState({"contacts" : [...this.state.contacts, newContact]});
        this.hidePopUpHandler("addContactDisplay");
    }
    
    onEditHandler = (editedContact)=>{
        ///
    }
    
    render(){
        return(
            <div className="contactList">
                <p className="title">contacts :</p>
                <button className="addButton" onClick={this.clickAddHandler}> + </button>
                <PopUp display={this.state.addContactDisplay}>
                    <Form onSubmit={this.onSubmitHandler}>
                        <button onClick={()=>this.hidePopUpHandler("addContactDisplay")}> x </button>
                    </Form>
                </PopUp>
                 {/*i should use a different key that has nothing to do with the info */}
                {this.state.contacts.map((contact) =>
                     <Contact key={contact.phoneNumber} phoneNumber={contact.phoneNumber} 
                     firstName={contact.firstName} 
                     lastName={contact.lastName}
                     email={contact.email}
                     onEdit={this.clickEditHandler}/>)}
            </div>
        );
    }
}

export default ContactList;
