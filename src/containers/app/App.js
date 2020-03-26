import React, { Component } from 'react';
// import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import './paletteClasses.css';
import Main from '../../components/layout/main/main';
import Header from '../../components/layout/header/header';
import Footer from "../../components/layout/footer/footer";
import Palette from "../palette/palette";
import TransScreen from '../../components/HOC/transparentScreen/transparentScreen';


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
    const classes = `App ${this.state.style}`;
    if(!this.state.serverErrMsg){
      return (
        <div className="App">
            <div className={classes}>
              <Header isRegistered={this.state.isRegistered} 
                registrationHandler ={this.registrationHandler}
                unregisterHandler = {this.unregisterHandler}/>
      
                <Main register = {this.registerHandler}
                      invalidMsgHandler={this.invalidMsgHandler}
                      invalidMsg={this.state.invalidMsg}
                      firstName = {this.state.user.name}
                      contacts = {this.state.user.contacts}
                      isRegistered = {this.state.isRegistered}
                      registerServerError = {this.registerServerError}/>
      
              <Footer author={"rouqaya abdulhaq"}/>
      
              <Palette changeStyle={this.changeStyleHandler}/>
            </div>
        </div>
        );
    }else{
      return(
          <div className="App">
              <div className={classes}>
                <Header isRegistered={this.state.isRegistered} 
                  registrationHandler ={this.registrationHandler}
                  unregisterHandler = {this.unregisterHandler}/>

                  <TransScreen msg={this.state.serverErrMsg}/>
                  
                  <Main register = {this.registerHandler}
                        invalidMsgHandler={this.invalidMsgHandler}
                        invalidMsg={this.state.invalidMsg}
                        firstName = {this.state.user.name}
                        contacts = {this.state.user.contacts}
                        isRegistered = {this.state.isRegistered}
                        registerServerError = {this.registerServerError}/>

                <Footer author={"rouqaya abdulhaq"}/>

                <Palette changeStyle={this.changeStyleHandler}/>
              </div>
          </div>
      );
    }
  }
}

export default App;
