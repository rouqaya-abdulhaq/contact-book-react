import React ,{Component} from 'react';
import ContactName from '../../../components/contact/contactInfo/contactName';
import EditBtn from '../../../components/contact/editButton/editButton';
import '../contactList.css';

class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
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
        return this.props.contacts[event.target.index];
    }

    displayEditForm = () =>{
        this.setState({
            'editClicked' : !this.state.editClicked
        })
    }

    onSubmitEditHandler = (editedContact) =>{
        this.props.EditListHandler(editedContact);
        this.displayEditForm();
    }

    render(){
        return(
            <div className="contact">
                <ContactName 
                contact={this.props.contact} 
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