import React from 'react';
import "./contactList.css";
import PopUp from '../../components/popUp/popUp';
import Form from '../form/form';
import EditButton from '../../components/editButton/editButton';


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

    onSubmitHandler = (newContact,id) =>{
        newContact.id = id;
        this.setState({"contacts" : [...this.state.contacts, newContact]});
        this.hidePopUpHandler("addContactDisplay");
    }
     
    onEditHandler = (index , newContact)=>{
        let contacts = [...this.state.contacts];
        contacts[index] = newContact;
        this.setState({
            'contacts' : contacts
        } );
    }

    onDeleteHandler = (index) =>{
        let contacts = [...this.state.contacts];
        contacts.splice(index,1);
        this.setState({
            contacts : contacts
        });
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
               
                {this.state.contacts.map((contact,index) =>
                <div key={contact.id}>
                    <li>{contact.firstName + " " + contact.lastName}</li>
                     
                   <EditButton showPopUp={this.showPopUpHandler} 
                    hidePopUp={this.hidePopUpHandler}
                   submitEditHandler={(newContact)=>this.onEditHandler(index , newContact)} 
                   oldContact={contact}/>

                   <button onClick={()=>this.onDeleteHandler(index)}> delete </button>
                </div>)}
            </div>
        );
    }
}

export default ContactList;
