import React ,{Component} from 'react';
import ContactName from '../../../components/contactInfo/contactName';

class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstName : props.contact.firstName,
            lastName : props.contact.lastName,
            email : props.contact.email,
            phoneNumber : props.contact.phoneNumber,
            index : props.index,
            contactClicked : false,
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

    render(){
        return(
            <div>
                <ContactName contact={this.state} 
                displayInfoState={this.state.contactClicked}
                displayInfo={this.displayContactInfo}
                getInfo={this.getContactInfo}/>
            </div>
        );
    }
}

export default Contact;