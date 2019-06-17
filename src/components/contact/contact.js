import React from 'react';


const Contact = (props)=>{
//no idea where i'm going with this
    let fullName = props.firstName + " " + props.lastName;
    return(
        <div>
            <li key={props.phoneNumber}>{fullName}</li>
            <button>edit</button>
        </div>
    );
}


export default Contact;