import React, { Component } from 'react';
import { BrowserRouter as Router,Redirect} from 'react-router-dom';
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
      wrongCredintialsMsg : null,
      user : {}
    }
  }

  wrongCredintialsHandler = () =>{
    this.setState({wrongCredintialsMsg : "wrong credintilas"});
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
    //RECONSIDER WHERE SHOULDE THIS REDIRECTING OF THE ROUTES BE
    let dir = null;
    if(this.state.isRegistered){
      dir = <Redirect to="contact-List"/>
    }
    
    return (
    <Router className="App">
      <div className={classes}>

        <Header isRegistered={this.state.isRegistered} 
          registrationHandler ={this.registrationHandler}
          unregisterHandler = {this.unregisterHandler}/>

          <Main register = {this.registerHandler}
                wrongCredintialsHandler={this.wrongCredintialsHandler}
                wrongCredintialsMsg={this.state.wrongCredintialsMsg}
                firstName = {this.state.user.name}
                contacts = {this.state.user.contacts}
                dir = {dir}/>

        <Footer author={"rouqaya abdulhaq"}/>

        <Palette changeStyle={this.changeStyleHandler}/>
      </div>
    </Router>
    );
  }
}

export default App;
