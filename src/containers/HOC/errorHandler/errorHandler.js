import React from 'react';

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
        return this.state.errorFound? <h1>ERRRRROR!</h1> : this.props.children;
    }
}

export default ErrorHandler;