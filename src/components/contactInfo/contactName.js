import React from 'react';
import ContactInfo from './contactInfo';

const contactName = (props) =>{
    return(
        <div>
           <li onClick={props.displayInfo}>
                {props.contact.firstName + " " + props.contact.lastName}
            </li>
            <ContactInfo displayInfoState={props.displayInfoState} 
            contact={props.contact}
            canceldisplayInfo={props.displayInfo}/> 
        </div>
    );
}

export default contactName;