import React from 'react';
import Form from '../form/form';
import PopUp from '../../components/popUp/popUp';
import Icon from './icon.png';
import ContactForm from '../../components/contactForm/contactForm';
import '../contact-list/contactList.css';

//could this process be done in another way to avoid another smart component??
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


    
    shouldComponentUpdate(nextProps, nextState){
        if(nextState === this.state){
            return false;
        }else {
            return true;
        }
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
                <img src={Icon} alt="edit" className="contactButtons" 
                    onClick={this.displayEditForm}></img> 
                <div className="contactForm">
                    <PopUp display={this.state.editClicked}>
                    <Form onSubmit={this.onSubmitEditHandler}>
                        <ContactForm>
                            <button onClick={this.displayEditForm}> x </button> 
                        </ContactForm>
                    </Form>
                    </PopUp>                
                </div>
            </div>
        ); 
    }
}

export default EditButton;