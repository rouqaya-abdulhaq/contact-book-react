import React from 'react';
import Input from '../../UI/input/input';
import SubmitBtn from '../../UI/submitBtn/submitBtn'; 
import '../../../containers/contact-list/contactList.css';

const ContactForm = (props) =>{

    const firstName = props.assigninput(props.values.firstName);
    const lastName = props.assigninput(props.values.lastName);
    const email = props.assigninput(props.values.email);
    const phoneNumber = props.assigninput(props.values.phoneNumber);

    return(
        <div>
            {props.children}
            <Input label={"first name"} id="firstName" inputType={"name"}
              value={firstName.value} isValid={firstName.isValid} hasChanged ={firstName.changed}
              type={"text"} changeHandler={props.changehandler}/>

            <Input label={"last name"} id="lastName" inputType={"name"} 
              value={lastName.value} isValid={lastName.isValid} hasChanged={lastName.changed}
              type={"text"} changeHandler={props.changehandler}/>

            <Input label={"email"} id="email" inputType={"email"}
              value={email.value} isValid={email.isValid} hasChanged={email.changed}
              type={"email"} changeHandler={props.changehandler}/>

            <Input label={"phone number"} id="phoneNumber" type={"tel"} inputType={"phoneNumber"} 
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={phoneNumber.value} 
              hasChanged={phoneNumber.changed}
              isValid={phoneNumber.isValid}
              changeHandler={props.changehandler}/>

            <SubmitBtn value={"Submit"}
              clickHandler={props.submitformhandler}
              infoArr={[firstName,lastName,email,phoneNumber]}/>
        </div>
    );

}

export default ContactForm;