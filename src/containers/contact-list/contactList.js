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
        <div key={contact.phoneNumber}>
            <li>{contact.firstName + " " + contact.lastName}</li>
             
           <EditButton showPopUp={this.showPopUpHandler} 
            hidePopUp={this.hidePopUpHandler}
           submitEditHandler={(newContact)=>this.onEditHandler(index , newContact)} 
           oldContact={contact}/>

           <button onClick={()=>this.onDeleteHandler(index)}> delete </button>
        </div>)
        
        return(
            <main>
                <div className="contactList">
                    <p className="title">contacts :</p>
                    <button className="addButton" onClick={this.displayAddForm}> + </button>
                    <PopUp display={this.state.addClicked}>
                        <Form onSubmit={this.onSubmitHandler}>
                            <button onClick={this.displayAddForm}> x </button>
                        </Form>
                    </PopUp>
                    {contacts}
                </div> 
            </main>

        );
    }
}

export default ContactList;
