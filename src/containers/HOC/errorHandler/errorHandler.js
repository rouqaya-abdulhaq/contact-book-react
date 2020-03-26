import React from 'react';
import TransScreen from '../../../components/HOC/transparentScreen/transparentScreen';
import {withRouter} from 'react-router-dom';

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

    refreshWebsite = () =>{
        this.props.history.push("/");
        this.setState({errorFound : false});
    }

    children = <div>
                    <h1 className="msg">FORGIVE US</h1>
                    <p className="msg">AN ERROR HAS OCCURRED!!</p>
                    <button onClick={this.refreshWebsite}>refresh</button> 
               </div>

    render(){
        if(this.state.errorFound){
            console.log("here");
        return (
            <div>
               <TransScreen children={this.children}></TransScreen>
               {this.props.children} 
            </div>
        );}
        return this.props.children;
    }
}

export default withRouter(ErrorHandler);