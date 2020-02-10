import React from 'react';
import Icon from './icon.png';
import '../../../containers/contact-list/contactList.css';
import ContactPopUp from '../contactFormPopUp/contactPopUp';

const EditButton = (props)=>{
        return(
            <div>
                <img src={Icon} alt="edit" id="editIcon" className="contactButtons" 
                    onClick={props.displayEditForm}></img> 
                
                <ContactPopUp clicked = {props.editClicked}
                submitHandler = {props.onSubmitEditHandler}
                toggleForm = {props.displayEditForm}/>
            </div>
        ); 
}

export default EditButton;