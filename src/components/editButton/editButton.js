import React from 'react';
import Form from '../../containers/form/form';
import PopUp from '../popUp/popUp';
import Icon from './icon.png';
import ContactForm from '../contactForm/contactForm';
import '../../containers/contact-list/contactList.css';

const EditButton = (props)=>{
        return(
            <div>
                <img src={Icon} alt="edit" className="contactButtons" 
                    onClick={props.displayEditForm}></img> 
                <div className="contactPopUps">
                    <PopUp display={props.editClicked}>
                    <Form onSubmit={props.onSubmitEditHandler}>
                        <ContactForm>
                            <button onClick={props.displayEditForm}> x </button> 
                        </ContactForm>
                    </Form>
                    </PopUp>                
                </div>
            </div>
        ); 
}

export default EditButton;