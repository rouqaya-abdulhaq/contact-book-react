import React from 'react';
import "./contactList.css";
import Contact from './contact/contact';
import ContactPopUp from '../../components/contact/contactFormPopUp/contactPopUp';

class ContactList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            contacts : this.props.contacts ? this.props.contacts : []  ,
            addClicked : false,
        }
    }

    onSubmitHandler = (newContact) =>{
            fetch('http://localhost:5000/contactAdd',{
            method : 'PUT',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                firstName : newContact.firstName,
                lastName : newContact.lastName,
                email : newContact.email,
                phoneNumber : newContact.phoneNumber
            })
            }).then((res)=>{
                return res.json();
            }).then((contact)=>{
                const contacts = [...this.state.contacts, contact];
                this.setState({"contacts" : contacts});
            }).catch((err)=>{
                console.log(err);
            });
        this.displayAddForm();
    }

    displayAddForm= () =>{
        this.setState({
            addClicked : !this.state.addClicked
        })
    }
    
    onEditHandler = (index , newContact)=>{
        fetch('http://localhost:5000/contactEdit',{
            method : 'PUT',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                firstName : newContact.firstName,
                lastName : newContact.lastName,
                email : newContact.email,
                phoneNumber : newContact.phoneNumber,
                index : index
            })
            }).then((res)=>{
                return res.json();
            }).then((contact)=>{
                const contacts = [...this.state.contacts];
                contacts[index] = contact;
                this.setState({
                    'contacts' : contacts
                });
            }).catch((err)=>{
                console.log(err);
            });
    }

    onDeleteHandler = (index) =>{
        fetch('http://localhost:5000/contactDelete',{
            method : 'DELETE',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                index : index
            })
            }).then((res)=>{
                return res.json();
            }).then((contactIndex)=>{
                const contacts = [...this.state.contacts];
                contacts.splice(contactIndex,1);
                this.setState({
                    contacts : contacts
                });
            }).catch((err)=>{
                console.log(err);
            });
    }

    render(){
        let contacts = null;
        if(this.state.contacts){
            contacts = this.state.contacts.map((contact,index) =>
            //phone number is the key for now only
            <div className="contact" key={contact.phoneNumber}>
                <Contact contact={contact} index={index}
                EditListHandler={(newContact)=>this.onEditHandler(index , newContact)}/>
    
               <button className="contactButtons" onClick={()=>this.onDeleteHandler(index)}>
                    x 
                </button>
            </div>) 
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
