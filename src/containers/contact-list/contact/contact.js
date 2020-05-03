import React ,{Component} from 'react';
import ContactName from '../../../components/contact/contactInfo/contactName';
import EditBtn from '../../../components/contact/editButton/editButton';
import '../contactList.css';

class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
           contInfo : { firstName : props.contact.contact_first_name,
            lastName : props.contact.contact_last_name,
            email : props.contact.contact_email,
            phoneNumber : props.contact.contact_phone_number},
            id : props.contact.contact_id,
            index : props.index,
            contactClicked : false,
            editClicked : false ,
        }
    }

    displayContactInfo = () =>{
        this.setState({
            contactClicked : !this.state.contactClicked
        });
    }

    getContactInfo = (event) =>{
        return this.state.contacts[event.target.index];
    }

    displayEditForm = () =>{
        this.setState({
            'editClicked' : !this.state.editClicked
        })
    }

    onSubmitEditHandler = (editedContact) =>{
        this.props.EditListHandler(editedContact);
    }

    render(){
        return(
            <div className="contact">
                <ContactName 
                contact={this.state.contInfo} 
                displayInfoState={this.state.contactClicked}
                displayInfo={this.displayContactInfo}
                getInfo={this.getContactInfo}/>

                <EditBtn
                editClicked={this.state.editClicked}
                displayEditForm = {this.displayEditForm}
                onSubmitEditHandler={this.onSubmitEditHandler}/>
            </div>
        );
    }
}

export default Contact;