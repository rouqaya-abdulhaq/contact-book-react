import React ,{Component} from 'react';
import ContactName from '../../../components/contactInfo/contactName';
import EditBtn from '../../../components/editButton/editButton';

class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
           contInfo : { firstName : props.contact.firstName,
            lastName : props.contact.lastName,
            email : props.contact.email,
            phoneNumber : props.contact.phoneNumber},
            index : props.index,
            contactClicked : false,
            editClicked : false ,
            editedContact : undefined,
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
        this.setState({
            'editedContact' : editedContact
        });
    }

    componentDidUpdate() {
        if(this.state.editedContact !== undefined){
            this.props.submitEditHandler(this.state.editedContact);
            this.setState(this.baseState);
        }
    }

    render(){
        return(
            <div>
                <ContactName 
                contact={this.state.contInfo} 
                displayInfoState={this.state.contactClicked}
                displayInfo={this.displayContactInfo}
                getInfo={this.getContactInfo}/>

                <EditBtn
                editClicked={this.state.editClicked}
                displayEditForm = {this.displayEditForm}
                oldContact={this.state.contInfo}
                onSubmitEditHandler={this.onSubmitEditHandler}/>
            </div>
        );
    }
}

export default Contact;