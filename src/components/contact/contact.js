import React from 'react';

//to be deleted
class Contact extends React.Component{

    render(){
        return(
            <div>
                <li key={this.props.phoneNumber}>
                {this.props.firstName + " " + this.props.lastName}</li>
            </div>
        );  
    }
}


export default Contact;