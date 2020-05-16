import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './App.css';
import './paletteClasses.css';
import Layout from '../../components/layout/layout/layout';

class App extends Component {
  constructor(){
    super();
    this.state = {
      style : 'default',
      isRegistered: false,
      user : {},
      serverErrMsg : "",
    }
  }

  unregisterHandler = () =>{
    if(this.state.isRegistered){
      this.setState({isRegistered : false, user : {}});
    }
  }

  registerHandler = (user) =>{
    if(user){
      this.setState({isRegistered : true, user : user});
      this.props.history.push('/contact-list');
    }
  }
 
  changeStyleHandler = (newStyle) =>{
    this.setState({
      style : newStyle 
    });
  }

  registerServerError = (msg) =>{
    this.setState({
      serverErrMsg : msg
    })
  }

  render() {
      return (
        <div className={this.state.style}>
          <Layout isRegistered={this.state.isRegistered} 
                  registrationHandler ={this.registrationHandler}
                  unregisterHandler = {this.unregisterHandler}
                  registerHandler = {this.registerHandler}
                  user = {this.state.user}
                  registerServerError = {this.registerServerError}
                  serverErrorMsg = {this.state.serverErrMsg}
                  changeStyle={this.changeStyleHandler}/>
        </div>
    );
  }
}

export default withRouter(App);
