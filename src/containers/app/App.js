import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Cookies from 'js-cookie';
import './App.css';
import './paletteClasses.css';
import Layout from '../../components/layout/layout/layout';

export class App extends Component {
  constructor(){
    super();
    this.state = {
      style : 'default',
      isRegistered: false,
      token : "",
      user : {},
      serverErrMsg : "",
    }
  }

  unregisterHandler = () =>{
    if(this.state.isRegistered){
      this.setState({isRegistered : false, user : {}});
      Cookies.remove('access-token');
    }
  }

  registerHandler = (user,jwt) =>{
    if(user){
      Cookies.set('access-token',jwt.accessToken,{expires : Date.parse(jwt.expiresAt), path : '/'});
      const token = Cookies.get('access-token')
      this.setState({isRegistered : true, user : user, token : token});
      this.props.history.push('/contact-list');
    }
  }
 
  changeStyleHandler = (newStyle) =>{
    if(newStyle){
      this.setState({
        style : newStyle 
      });
    }
  }

  registerServerError = (msg) =>{
    if(msg){
      this.setState({
        serverErrMsg : msg
      })
    }
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
                  changeStyle={this.changeStyleHandler}
                  token = {this.state.token}/>
        </div>
    );
  }
}

export default withRouter(App);
