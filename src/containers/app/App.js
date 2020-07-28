import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Cookies from 'js-cookie';
import './App.css';
import './paletteClasses.css';
import Layout from '../../components/layout/layout/layout';
import Spinner from '../../components/UI/spinner/spinner';
import {updateStyleInDB} from './fetchCalls';

export class App extends Component {
  constructor(){
    super();
    this.state = {
      style : 'default',
      isRegistered: false,
      token : "",
      user : {},
      serverErrMsg : "",
      loading : false
    }
  }

  unregisterHandler = () =>{
    if(this.state.isRegistered){
      this.setState({isRegistered : false, user : {}, style : 'default'});
      Cookies.remove('access-token');
    }
  }

  registerHandler = (user,jwt) =>{
    if(user){
      const style = user.style ? user.style : 'default';
      Cookies.set('access-token',jwt.accessToken,{expires : Date.parse(jwt.expiresAt), path : '/'});
      const token = Cookies.get('access-token')
      this.setState({isRegistered : true, user : user, token : token ,style : style});
      this.props.history.push('/contact-list');
    }
  }
 
  changeStyleHandler = (newStyle) =>{
    if(newStyle){
      this.setState({
        style : newStyle 
      });
      if(this.state.user && this.state.token){
        updateStyleInDB(this.state.token,newStyle,this.state.user.user_id);
      }
    }
  }

  registerServerError = (msg) =>{
    if(msg){
      this.setState({
        serverErrMsg : msg
      })
    }
  }

  isLoading = () =>{
    this.setState({loading : true});
  }

  isCompleted = () =>{
    this.setState({loading : false});
  }

  render() {
    console.log(this.state.loading);
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
                  token = {this.state.token}
                  isLoading = {this.isLoading}
                  isCompleted = {this.isCompleted}/>
        </div>
    );
  }
}

export default withRouter(App);
