import React from 'react';
import ErrorScreen from '../../../components/HOC/errorScreen/errorScreen';

class ErrorHandler extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            errorFound : false,
        }
    }

    componentDidCatch(error,info){
        this.setState({errorFound : true});
    }

    render(){
        if(this.state.errorFound){
        return (
            <div>
               <ErrorScreen errorMsg={"FORGIVE US AN ERROR HAS OCCURED!!!"}/>
               {this.props.children} 
            </div>
        );}
        return this.props.children;
    }
}

export default ErrorHandler;