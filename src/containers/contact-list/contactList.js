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

    componentDidMount(){
        if(this.props.id){
            this.loadContacts(this.props.id);
        }
    }

    loadContacts = (id) =>{
        fetch(`http://localhost:5000/loadContacts?id=${id}`,{
            method : 'GET',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, 
        }).then((res)=>{
            return res.json();
        }).then((contacts) =>{
            this.setState({contacts : contacts});
        }).catch((err) =>{
            console.log(err);
            this.props.registerServerError("unable to load contacts from server");
        })
    }

    onSubmitHandler = (newContact) =>{
            fetch('http://localhost:5000/contactAdd',{
            method : 'PUT',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                firstName : newContact.firstName.value,
                lastName : newContact.lastName.value,
                email : newContact.email.value,
                phoneNumber : newContact.phoneNumber.value
            })
            }).then((res)=>{
                return res.json();
            }).then((contact)=>{
                const contacts = [...this.state.contacts, contact];
                this.setState({"contacts" : contacts});
            }).catch((err)=>{
                console.log(err);
                this.props.registerServerError("unable to submit contact");
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
                firstName : newContact.firstName.value,
                lastName : newContact.lastName.value,
                email : newContact.email.value,
                phoneNumber : newContact.phoneNumber.value,
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
                this.props.registerServerError("unable to edit contact");
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
                this.props.registerServerError("unable to delete contact");
            });
    }

    render(){
        let contacts = null;
        if(this.state.contacts){
            contacts = this.state.contacts.map((contact,index) =>
            <div className="contact" key={contact.contact_id}>
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
