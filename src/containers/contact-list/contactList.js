import React from 'react';
import "./contactList.css";
import Contact from './contact/contact';
import ContactPopUp from '../../components/contact/contactFormPopUp/contactPopUp';

import * as fetchCalls from './fetchCalls';

class ContactList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            contacts : [] ,
            addClicked : false,
        }
    }

    componentDidMount(){
        if(this.props.id){
            fetchCalls.LoadContactsCall(this.props.id,this.stateUpdate,this.props.registerServerError);
        }
    }

    stateUpdate = (oldStateName,newState) =>{
        this.setState({[oldStateName] : newState});
    }

    onSubmitHandler = (newContact) =>{
            newContact.userId = this.props.id;
            fetchCalls.SubmitCall(newContact,this.state.contacts,this.stateUpdate,this.props.registerServerError);
            this.displayAddForm();
    }

    displayAddForm= () =>{
        this.setState({
            addClicked : !this.state.addClicked
        })
    }
    
    onEditHandler = (index,id, newContact)=>{
        const contactInfo = {
            editedContact : newContact,
            id : id,
            index : index
        }
        fetchCalls.EditCall(contactInfo,this.state.contacts,this.stateUpdate,this.props.registerServerError);
        //         this.props.registerServerError("unable to edit contact");
    }

    onDeleteHandler = (index,id) =>{
        const contactInfo = {
            index : index,
            id : id
        }
        fetchCalls.DeleteCall(contactInfo,this.state.contacts,this.stateUpdate,this.props.registerServerError);
        //         this.props.registerServerError("unable to delete contact");
    }

    render(){
        let contacts = null;
        if(this.state.contacts){
            contacts = this.state.contacts.map((contact,index) => {
            return <div className="contact" key={contact.contact_id}>
                <Contact contact={contact} index={index}
                EditListHandler={(newContact)=>this.onEditHandler(index,contact.contact_id, newContact)}/>
    
               <button className="contactButtons" onClick={()=>this.onDeleteHandler(index,contact.contact_id)}>
                    x 
                </button>
            </div>}) 
        }
        return(
            <main className="contactList">
                <div>
                    <p className="title">{this.props.firstName}'s contacts : </p>

                    <button className="addButton" onClick={this.displayAddForm}> + </button>
                    
                    <ContactPopUp clicked = {this.state.addClicked}
                    submitHandler = {this.onSubmitHandler}
                    toggleForm ={this.displayAddForm}/>

                    {contacts}
                </div> 
            </main>
        );
    }
}

export default ContactList;
