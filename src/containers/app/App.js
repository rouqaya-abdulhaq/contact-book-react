import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import './App.css';
import './paletteClasses.css';
import Header from '../../components/header/header';
import ContactList from '../contact-list/contactList';
import Footer from "../../components/footer/footer";
import Palette from "../../components/palette/palette";
import SignUp from '../../components/signUp/signUp';
import LogIn from '../../components/logIn/logIn';




class App extends Component {
  constructor(){
    super();
    this.state = {
      style : 'default',
      isRegistered: true,
    }
  }

  updateRegistrationHandler = () =>{
      this.setState({isRegistered : !this.state.isRegistered})
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
        updateRegistrationHandler ={this.updateRegistrationHandler}/>
        <Switch>
          <Route exact path="/" component={ContactList}></Route>
          <Route exact path="/sign-up" 
          render={(props)=> <SignUp 
                              updateRegistrationHandler={this.updateRegistrationHandler} 
          isAuthed={true}/>} 
          ></Route>
          <Route exact path="/log-in" 
          render={(props)=> <LogIn 
                              updateRegistrationHandler={this.updateRegistrationHandler}
          isAuthed={true} />}>
          </Route>
        </Switch>
        <Footer author={"rouqaya abdulhaq"}/>
        <Palette changeStyle={this.changeStyleHandler}/>
      </div>
    </Router>
    );
  }
}

export default App;
