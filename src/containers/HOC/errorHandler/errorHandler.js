import React from 'react';
import TransScreen from '../../../components/HOC/transparentScreen/transparentScreen';

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

    children = <div>
                    <h1 className="msg">FORGIVE US</h1>
                    <p className="msg">AN ERROR HAS OCCURRED!!</p> 
               </div>

    render(){
        if(this.state.errorFound){
        return (
            <div>
               <TransScreen children={this.children}></TransScreen>
               {this.props.children} 
            </div>
        );}
        return this.props.children;
    }
}

export default ErrorHandler;