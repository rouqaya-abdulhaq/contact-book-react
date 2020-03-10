import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import './paletteClasses.css';
import Main from '../../components/layout/main/main';
import Header from '../../components/layout/header/header';
import Footer from "../../components/layout/footer/footer";
import Palette from "../palette/palette";
import ErrorHandler from '../HOC/errorHandler/errorHandler';


class App extends Component {
  constructor(){
    super();
    this.state = {
      style : 'default',
      isRegistered: false,
      invalidMsg : null,
      user : {}
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

  
  render() {
    const classes = `App ${this.state.style}`;
    
    return (
    <Router className="App">
      <div className={classes}>
      <ErrorHandler>
        <Header isRegistered={this.state.isRegistered} 
          registrationHandler ={this.registrationHandler}
          unregisterHandler = {this.unregisterHandler}/>

          <Main register = {this.registerHandler}
                invalidMsgHandler={this.invalidMsgHandler}
                invalidMsg={this.state.invalidMsg}
                firstName = {this.state.user.name}
                contacts = {this.state.user.contacts}
                isRegistered = {this.state.isRegistered}/>

        <Footer author={"rouqaya abdulhaq"}/>

        <Palette changeStyle={this.changeStyleHandler}/>
        </ErrorHandler>
      </div>
    </Router>
    );
  }
}

export default App;
