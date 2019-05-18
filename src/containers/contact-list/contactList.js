import React from 'react';
import "./contactList.css"

class ContactList extends React.Component{
    constructor(){
        super();
        this.state = {
            contacts : []
        }
    }
    render(){
        return(
            <div className="contactList">
                <p className="title">contacts :</p>
                <button className="addButton"> + </button>
            </div>
        );
    }
}

export default ContactList;
