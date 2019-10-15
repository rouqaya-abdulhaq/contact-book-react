import React from 'react';
import Icon from './icon.png';
import '../../containers/contact-list/contactList.css';
import ContactPopUp from '../contactForm/contactPopUp/contactPopUp';

const EditButton = (props)=>{
        return(
            <div>
                <img src={Icon} alt="edit" className="contactButtons" 
                    onClick={props.displayEditForm}></img> 
                
                <ContactPopUp clicked = {props.editClicked}
                submitHandler = {props.onSubmitEditHandler}
                toggleForm = {props.displayEditForm}/>
            </div>
        ); 
}

export default EditButton;