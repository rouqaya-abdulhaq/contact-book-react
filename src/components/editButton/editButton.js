import React from 'react';
import Form from '../../containers/form/form';
import PopUp from '../popUp/popUp';

class EditButton extends React.Component{
    constructor(props){
        super(props);
        this.state={
            editedContact : undefined,
            editClicked : false,
            editFormDisplay : "hide"
        }
    }
    //the two next methods are duplicated from contact list find a way to clean them up
    hidePopUpHandler = (state)=>{
        this.setState({[state] : "hide"});
    }

    showPopUpHandler = (state)=>{
        this.setState({[state]: "show"})
    }

    editClickedHandler = ()=>{
        this.setState({
            "editClicked" : !this.state.editClicked
         });
    }

    clickEditHandler = () =>{
        this.editClickedHandler();
        this.showPopUpHandler("editFormDisplay");
    }

    getEditedContactHandler = (editedContact) =>{
        this.setState({
            'editedContact' : editedContact
        });
    }

    componentDidUpdate() {
        if(this.state.editedContact !== undefined){
            this.props.submitEditHandler(this.state.editedContact);
        }
    }

    render(){
        return(
            <div>
                <button onClick={this.clickEditHandler}>edit</button>
                <PopUp display={this.state.editFormDisplay}>
                  <Form onSubmit={this.getEditedContactHandler}>
                    <button onClick={()=>this.hidePopUpHandler("editFormDisplay")}> x </button>
                  </Form>
                </PopUp>
    
            </div>
        ); 
    }
}

export default EditButton;