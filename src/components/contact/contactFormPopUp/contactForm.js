import React from 'react';
import Input from '../../UI/input/input';
import '../../../containers/contact-list/contactList.css';

const ContactForm = (props) =>{
    return(
        <div>
            {props.children}
            <Input label={"first name"} id="firstName" value={props.values.firstName || ''}
              type={"text"} changeHandler={props.changehandler}/>

              <Input label={"last name"} id="lastName" value={props.values.lastName || ''}
              type={"text"} changeHandler={props.changehandler}/>

              <Input label={"email"} id="email" value={props.values.email || ''}
              type={"email"} changeHandler={props.changehandler}/>

              <Input label={"phone number"} id="phoneNumber" type={"tel"} 
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={props.values.phoneNumber || ''}
              changeHandler={props.changehandler}/>

              <button className="submitButton" onClick={props.submitformhandler}>
                  submit
              </button>
        </div>
    );

}

export default ContactForm;