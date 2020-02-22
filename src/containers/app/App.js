import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import './paletteClasses.css';
import Main from '../../components/layout/main/main';
import Header from '../../components/layout/header/header';
import Footer from "../../components/layout/footer/footer";
import Palette from "../palette/palette";


class App extends Component {
  constructor(){
    super();
    this.state = {
      style : 'default',
      isRegistered: false,
      serverErrMsg : null,
      user : {}
    }
  }

  serverErrHandler = (msg) =>{
    console.log(msg);
    this.setState({serverErrMsg : msg});
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

  
  render() {
    const classes = `App ${this.state.style}`;
    
    return (
    <Router className="App">
      <div className={classes}>

        <Header isRegistered={this.state.isRegistered} 
          registrationHandler ={this.registrationHandler}
          unregisterHandler = {this.unregisterHandler}/>

          <Main register = {this.registerHandler}
                serverErrHandler={this.serverErrHandler}
                serverErrMsg={this.state.serverErrMsg}
                firstName = {this.state.user.name}
                contacts = {this.state.user.contacts}
                isRegistered = {this.state.isRegistered}/>

        <Footer author={"rouqaya abdulhaq"}/>

        <Palette changeStyle={this.changeStyleHandler}/>
      </div>
    </Router>
    );
  }
}

export default App;
