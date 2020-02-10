import React from 'react';
import PopUp from '../../HOC/popUp/popUp';
import Form from '../../../containers/form/form';
import ContactForm from './contactForm';
import '../../../containers/contact-list/contactList.css';

const contactPopUp = (props) => {
    return(
        <div className="contactPopUps">
            <PopUp  display={props.clicked}>
                <Form  onSubmit={props.submitHandler}>
                    <ContactForm>
                        <button
                            className="cancelButton" onClick={props.toggleForm}> x 
                        </button>
                    </ContactForm>
                </Form>
            </PopUp> 
        </div>
    );
}

export default contactPopUp;