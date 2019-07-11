import React from 'react';
import Form from '../../containers/form/form';
import PopUp from '../popUp/popUp';

class EditButton extends React.Component{
    constructor(props){
        super(props);
        this.state={
            editedContact : undefined,
        }
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
                <button onClick={this.props.editClick}>edit</button>
                 {/*when an edit button is pressed all the edit pop ups are showed */}
                <PopUp display={this.props.displayEditForm}>
                  <Form onSubmit={this.getEditedContactHandler}>
                    <button onClick={()=>this.props.hidePopUpHandler("editFormDisplay")}> x </button>
                  </Form>
                </PopUp>
    
            </div>
        ); 
    }
}

export default EditButton;