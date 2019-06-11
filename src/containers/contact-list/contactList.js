import React from 'react';
import "./contactList.css";
import PopUp from '../../components/popUp/popUp';
import Form from '../form/form';

class ContactList extends React.Component{
    constructor(){
        super();
        this.state = {
            contacts : [],
            addClicked : false,
            popUpDisplay : "hide"
        }
    }

    addContactHandler = ()=>{
        this.setState({
           "addClicked" : !this.state.addClicked
        });
    }

    hidePopUpHandler = ()=>{
        this.setState({"popUpDisplay" : "hide"});
    }

    showPopUpHandler = ()=>{
        this.setState({"popUpDisplay": "show"})
    }

    clickAddHandler = () =>{
        this.addContactHandler();
        this.showPopUpHandler();
    }

    render(){
        return(
            <div className="contactList">
                <p className="title">contacts :</p>
                <button className="addButton" onClick={this.clickAddHandler}> + </button>
                <PopUp display={this.state.popUpDisplay}>
                    <Form>
                        <button onClick={this.hidePopUpHandler}> x </button>
                    </Form>
                </PopUp>
            </div>
        );
    }
}

export default ContactList;
