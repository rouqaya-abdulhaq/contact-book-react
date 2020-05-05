import React from 'react';
import ContactInfo from './contactInfo';

const contactName = (props) =>{
    return(
        <div>
           <li onClick={props.displayInfo}>
                {props.contact.contact_first_name + " " + props.contact.contact_last_name}
            </li>
            <ContactInfo displayInfoState={props.displayInfoState} 
                getInfo={props.getInfo}
                info = {props.contact}
                canceldisplayInfo={props.displayInfo}/>
        </div>
    );
}

export default contactName;