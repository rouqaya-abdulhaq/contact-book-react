import React from 'react';
import PopUp from '../popUp/popUp';
import '../../containers/contact-list/contactList.css';
//only displays the last item in list
const contactInfo = (props) =>{
    return(
        <div className="contactPopUps">
           <PopUp display={props.displayInfoState}>
                <button className="cancelButton" onClick={props.canceldisplayInfo}>
                     x 
                </button>
                <p>first name : {props.contact.firstName}</p>
                <p>last name : {props.contact.lastName}</p>
                <p>email : {props.contact.email}</p>
                <p>phone number : {props.contact.phoneNumber}</p>
            </PopUp> 
        </div>
    );
}

export default contactInfo;