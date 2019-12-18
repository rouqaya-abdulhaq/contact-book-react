import React from 'react';
import "./contactList.css";
import Contact from './contact/contact';
import ContactPopUp from '../../components/contactForm/contactPopUp/contactPopUp';

class ContactList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            contacts : []  ,
            addClicked : false,
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.contacts !== prevProps.contacts){
            this.setState({contacts : this.props.contacts})
        }
    }

    onSubmitHandler = (newContact) =>{
        this.setState({"contacts" : [...this.state.contacts, newContact]});
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
                console.log(contact);
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
        let contacts = [...this.state.contacts];
        contacts[index] = newContact;
        this.setState({
            'contacts' : contacts
        });
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
                console.log(contact);
            }).catch((err)=>{
                console.log(err);
            });
    }

    onDeleteHandler = (index) =>{
        let contacts = [...this.state.contacts];
        contacts.splice(index,1);
        this.setState({
            contacts : contacts
        });
        fetch('http://localhost:5000/contactDelete',{
            method : 'PUT',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                index : index
            })
            }).then((res)=>{
                return res.json();
            }).then((contact)=>{
                console.log(contact);
            }).catch((err)=>{
                console.log(err);
            });
    }

    render(){
          const contacts = this.state.contacts.map((contact,index) =>
            //phone number is the key for now only
            <div className="contact" key={contact.phoneNumber}>
                <Contact contact={contact} index={index}
                EditListHandler={(newContact)=>this.onEditHandler(index , newContact)}/>
    
               <button className="contactButtons" onClick={()=>this.onDeleteHandler(index)}>
                    x 
                </button>
            </div>) 
          
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
