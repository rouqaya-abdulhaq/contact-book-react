import React from 'react';
import Input from '../../UI/input/input';
import '../../../containers/contact-list/contactList.css';

const ContactForm = (props) =>{

    const firstName = props.values.firstName === undefined ? '' : props.values.firstName.value;
    const lastName = props.values.lastName === undefined ? '' : props.values.lastName.value;
    const email = props.values.email === undefined ? '' : props.values.email.value;
    const phoneNumber = props.values.phoneNumber === undefined ? '' : props.values.phoneNumber.value;

    const validFirstName = props.values.firstName === undefined ? true : props.values.firstName.isValid;
    const validLastName = props.values.lastName === undefined ? true : props.values.lastName.isValid;
    const validEmail = props.values.email === undefined ? true : props.values.email.isValid;
    const validPhoneNumber = props.values.phoneNumber === undefined ? true : props.values.phoneNumber.isValid;

    return(
        <div>
            {props.children}
            <Input label={"first name"} id="firstName" inputType={"name"}
            value={firstName} isValid={validFirstName}
              type={"text"} changeHandler={props.changehandler}/>

              <Input label={"last name"} id="lastName" inputType={"name"} 
              value={lastName} isValid={validLastName}
              type={"text"} changeHandler={props.changehandler}/>

              <Input label={"email"} id="email" inputType={"email"}
              value={email} isValid={validEmail}
              type={"email"} changeHandler={props.changehandler}/>

              <Input label={"phone number"} id="phoneNumber" type={"tel"} inputType={"phoneNumber"} 
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={phoneNumber} 
              isValid={validPhoneNumber}
              changeHandler={props.changehandler}/>

              <button className="submitButton" onClick={props.submitformhandler}>
                  submit
              </button>
        </div>
    );

}

export default ContactForm;