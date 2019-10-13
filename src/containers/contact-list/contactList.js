import React from 'react';
import "./contactList.css";
import PopUp from '../../components/popUp/popUp';
import Form from '../form/form';
import EditButton from '../editButton/editButton';
import ContactForm from '../../components/contactForm/contactForm';
import Contact from './contact/contact';

class ContactList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            contacts : [],
            addClicked : false,
        }
    }

    onSubmitHandler = (newContact) =>{
        this.setState({"contacts" : [...this.state.contacts, newContact]});
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
        //phone number is the key for now only
        
        <div className="contact" key={contact.phoneNumber}>
            <Contact contact={contact} index={index} />
             
           <EditButton showPopUp={this.showPopUpHandler} 
            hidePopUp={this.hidePopUpHandler}
            submitEditHandler={(newContact)=>this.onEditHandler(index , newContact)} 
            oldContact={contact}/>

           <button className="contactButtons" onClick={()=>this.onDeleteHandler(index)}> x </button>
        </div>)
        return(
            <main className="contactList">
                <div>
                    <p className="title">contacts :</p>
                    <button className="addButton" onClick={this.displayAddForm}> + </button>
                    <div className="contactPopUps">
                        <PopUp  display={this.state.addClicked}>
                            <Form  onSubmit={this.onSubmitHandler}>
                                <ContactForm>
                                <button
                                    className="cancelButton" onClick={this.displayAddForm}> x 
                                </button>
                                </ContactForm>
                            </Form>
                        </PopUp> 
                    </div>
                    {contacts}
                </div> 
            </main>

        );
    }
}

export default ContactList;
