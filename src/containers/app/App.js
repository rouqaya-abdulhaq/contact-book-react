import React, { Component } from 'react';
import './App.css';
import './paletteClasses.css';
import Layout from '../../components/layout/layout/layout';

class App extends Component {
  constructor(){
    super();
    this.state = {
      style : 'default',
      isRegistered: false,
      invalidMsg : null,
      user : {},
      serverErrMsg : "",
    }
  }

  invalidMsgHandler = (msg) =>{
    this.setState({invalidMsg : msg});
  }

  unregisterHandler = () =>{
    if(this.state.isRegistered){
      this.setState({isRegistered : false, user : {}});
    }
  }

  registerHandler = (user) =>{
    if(user){
      this.setState({isRegistered : true, user : user});
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
                  invalidMsgHandler={this.invalidMsgHandler}
                  invalidMsg={this.state.invalidMsg}
                  firstName = {this.state.user.user_first_name}
                  contacts = {this.state.user.contacts}
                  registerServerError = {this.registerServerError}
                  serverErrorMsg = {this.state.serverErrMsg}
                  changeStyle={this.changeStyleHandler}/>
        </div>
    );
  }
}

export default App;
