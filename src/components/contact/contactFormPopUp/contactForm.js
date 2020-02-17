import React from 'react';
import Input from '../../UI/input/input';
import '../../../containers/contact-list/contactList.css';

const ContactForm = (props) =>{

    const firstName = props.values.firstName === undefined ? '' : props.values.firstName.value;
    const lastName = props.values.lastName === undefined ? '' : props.values.lastName.value;
    const email = props.values.email === undefined ? '' : props.values.email.value;
    const phoneNumber = props.values.phoneNumber === undefined ? '' : props.values.phoneNumber.value;

    return(
        <div>
            {props.children}
            <Input label={"first name"} id="firstName" inputType={"name"}
            value={firstName}
              type={"text"} changeHandler={props.changehandler}/>

              <Input label={"last name"} id="lastName" inputType={"name"} 
              value={lastName}
              type={"text"} changeHandler={props.changehandler}/>

              <Input label={"email"} id="email" inputType={"email"}
              value={email}
              type={"email"} changeHandler={props.changehandler}/>

              <Input label={"phone number"} id="phoneNumber" type={"tel"} inputType={"phoneNumber"} 
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={phoneNumber}
              changeHandler={props.changehandler}/>

              <button className="submitButton" onClick={props.submitformhandler}>
                  submit
              </button>
        </div>
    );

}

export default ContactForm;