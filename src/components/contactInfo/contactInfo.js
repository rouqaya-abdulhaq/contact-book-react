import React from 'react';
import PopUp from '../popUp/popUp';
import '../../containers/contact-list/contactList.css';
//only displays the last item in list
//without the pop up it's working correctly ??
const contactInfo = (props) =>{
        return(
            <div className={"contactPopUps"}>
               <PopUp display={props.displayInfoState}>
                    <button className="cancelButton" onClick={props.canceldisplayInfo}>
                         x 
                    </button>
                    <p>first name : {props.info.firstName}</p>
                    <p>last name : {props.info.lastName}</p>
                    <p>email : {props.info.email}</p>
                    <p>phone number : {props.info.phoneNumber}</p>
                </PopUp> 
            </div>
        ); 
}

export default contactInfo;