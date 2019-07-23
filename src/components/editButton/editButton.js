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
        this.baseState = this.state;
    }
    /*1-the showpopup and hidepopup are duplicates frm the parent fix that
    2-the id passed as key is being used for the same edited and original which is causing
    a warning*/

    clickEditHandler = () =>{
        this.displayEditForm();
        this.showPopUp("editFormDisplay");
    }

    displayEditForm = ()=>{
        this.setState({
            "editClicked" : !this.state.editClicked
         });
    }

    showPopUp = (state)=>{
        this.setState({[state]: "show"})
    }


    onSubmitEditHandler = (editedContact) =>{
        this.setState({
            'editedContact' : editedContact
        });
    }

    hidePopUp = (state)=>{
        this.setState({[state] : "hide"});
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
                <button onClick={this.clickEditHandler}>edit</button>
                <PopUp display={this.state.editFormDisplay}>
                  <Form onSubmit={this.onSubmitEditHandler}>
                    <button onClick={()=>this.hidePopUp("editFormDisplay")}> x </button>
                  </Form>
                </PopUp>
    
            </div>
        ); 
    }
}

export default EditButton;