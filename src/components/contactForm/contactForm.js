import React from 'react';
import Input from '../input/input';
import '../../containers/contact-list/contactList.css';

const ContactForm = (props) =>{
    return(
        <div>
            {props.children}
            <Input label={"first name"} id="firstName" value={props.firstname}
              type={"text"} onChange={props.changehandler}/>

              <Input label={"last name"} id="lastName" value={props.lastname}
              type={"text"} onChange={props.changehandler}/>

              <Input label={"email"} id="email" value={props.email}
              type={"email"} onChange={props.changehandler}/>

              <Input label={"phone number"} id="phoneNumber" type={"tel"} 
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={props.phonenumber}
              onChange={props.changehandler}/>
        </div>
    );

}

export default ContactForm;