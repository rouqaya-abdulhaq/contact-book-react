import React from 'react';
import "./contactList.css";
import PopUp from '../../components/popUp/popUp';
import Form from '../form/form';
import EditButton from '../../components/editButton/editButton';
/*i can't seem to update the contacts more than once i get ×
"Maximum update depth exceeded" error */

class ContactList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            contacts : [],
            addClicked : false,
            addContactDisplay : "hide",
        }
    }

    clickAddHandler = () =>{
        this.displayContactForm();
        this.showPopUp("addContactDisplay");
    }
    
    displayContactForm = ()=>{
        this.setState({
           "addClicked" : !this.state.addClicked
        });
    }

    showPopUp = (state)=>{
        this.setState({[state]: "show"})
    }


    onSubmitHandler = (newContact,id) =>{
        newContact.id = id;
        this.setState({"contacts" : [...this.state.contacts, newContact]});
        this.hidePopUp("addContactDisplay");
    }

    hidePopUp = (state)=>{
        this.setState({[state] : "hide"});
    }
    /*edit handler is being called multiple times by the edit button 
    but it works perfectly in the first edit  */
     
    onEditHandler = (index , newContact)=>{
        let contacts = [...this.state.contacts];
        contacts[index] = newContact;
        this.setState({
            'contacts' : contacts
        });
    }


    onDeleteHandler = (index) =>{
        let contacts = [...this.state.contacts];
        contacts.splice(index,1);
        this.setState({
            contacts : contacts
        });
    }

    
    render(){
        const contacts = this.state.contacts.map((contact,index) =>
        <div key={contact.id}>
            <li>{contact.firstName + " " + contact.lastName}</li>
             
           <EditButton showPopUp={this.showPopUpHandler} 
            hidePopUp={this.hidePopUpHandler}
           submitEditHandler={(newContact)=>this.onEditHandler(index , newContact)} 
           oldContact={contact}/>

           <button onClick={()=>this.onDeleteHandler(index)}> delete </button>
        </div>)
        
        return(
            <div className="contactList">
                <p className="title">contacts :</p>
                <button className="addButton" onClick={this.clickAddHandler}> + </button>
                <PopUp display={this.state.addContactDisplay}>
                    <Form onSubmit={this.onSubmitHandler}>
                        <button onClick={()=>this.hidePopUp("addContactDisplay")}> x </button>
                    </Form>
                </PopUp>
                {/* create a scroll bar around contacts  */}
                {contacts}
            </div>
        );
    }
}

export default ContactList;
