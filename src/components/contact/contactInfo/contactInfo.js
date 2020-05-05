import React from 'react';
import PopUp from '../../HOC/popUp/popUp';
import '../../../containers/contact-list/contactList.css';

const contactInfo = (props) =>{
        return(
            <div className={"contactPopUps"}>
               <PopUp display={props.displayInfoState}>
                    <button className="cancelButton" onClick={props.canceldisplayInfo}>
                         x 
                    </button>
                    <p>first name : {props.info.contact_first_name}</p>
                    <p>last name : {props.info.contact_last_name}</p>
                    <p>email : {props.info.contact_email}</p>
                    <p>phone number : {props.info.contact_phone_number}</p>
                </PopUp> 
            </div>
        ); 
}

export default contactInfo;