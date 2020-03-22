import React from 'react';

class ErrorHandler extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            errorFound : false,
        }
    }

    componentDidCatch(error,info){
        console.log("error");
        this.setState({errorFound : true});
    }

    render(){
        if(this.state.errorFound){
            return  <h1>ERRRRROR!</h1>
        }
        return this.props.children;
    }
}

export default ErrorHandler;