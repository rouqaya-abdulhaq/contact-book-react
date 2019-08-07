import React from 'react';
import Form from '../../containers/form/form';
import PopUp from '../popUp/popUp';
import '../../containers/contact-list/contactList.css';

class EditButton extends React.Component{
    constructor(props){
        super(props);
        this.state={
            editedContact : undefined,
            editClicked : false ,
        }
        this.baseState = this.state;
    }

    displayEditForm = () =>{
        this.setState({
            editClicked : !this.state.editClicked
        })
    }

    onSubmitEditHandler = (editedContact) =>{
        this.setState({
            'editedContact' : editedContact
        });
    }
   
    componentDidUpdate() {
        if(this.state.editedContact !== undefined){
            this.props.submitEditHandler(this.state.editedContact);
            this.setState(this.baseState);
        }
    }

    render(){
        return(
            <div>
                <button onClick={this.displayEditForm}>edit</button>
                <div className="contactForm">
                    <PopUp display={this.state.editClicked}>
                      <Form onSubmit={this.onSubmitEditHandler}>
                        <button onClick={this.displayEditForm}> x </button>
                      </Form>
                    </PopUp>
                </div>
            </div>
        ); 
    }
}

export default EditButton;