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

    const firstNameChanged = props.values.firstName === undefined ? false : props.values.firstName.hasChanged;
    const lastNameChanged = props.values.lastName === undefined ? false : props.values.lastName.hasChanged;
    const emailChanged = props.values.email === undefined ? false : props.values.email.hasChanged;
    const phoneNumberChanged = props.values.phoneNumber === undefined ? false : props.values.phoneNumber.hasChanged;

    return(
        <div>
            {props.children}
            <Input label={"first name"} id="firstName" inputType={"name"}
            value={firstName} isValid={validFirstName} hasChanged ={firstNameChanged}
              type={"text"} changeHandler={props.changehandler}/>

              <Input label={"last name"} id="lastName" inputType={"name"} 
              value={lastName} isValid={validLastName} hasChanged={lastNameChanged}
              type={"text"} changeHandler={props.changehandler}/>

              <Input label={"email"} id="email" inputType={"email"}
              value={email} isValid={validEmail} hasChanged={emailChanged}
              type={"email"} changeHandler={props.changehandler}/>

              <Input label={"phone number"} id="phoneNumber" type={"tel"} inputType={"phoneNumber"} 
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={phoneNumber} hasChanged={phoneNumberChanged}
              isValid={validPhoneNumber}
              changeHandler={props.changehandler}/>

              <button className="submitButton" onClick={props.submitformhandler}>
                  submit
              </button>
        </div>
    );

}

export default ContactForm;