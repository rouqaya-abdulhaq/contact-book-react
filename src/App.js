import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import './App.css';
import Header from './containers/header/header';
import ContactList from './containers/contact-list/contactList';
import Footer from "./components/footer/footer";
import Palette from "./components/palette/palette";
import SignUp from './components/signUp/signUp';
import LogIn from './components/logIn/logIn';



class App extends Component {
  constructor(){
    super();
    this.state = {
      styles : [],
      isRegistered: true
    }
  }

  updateRegistrationHandler = () =>{
      this.setState({isRegistered : !this.state.isRegistered})
  }

  render() {
    return (
    <Router>
      <div className="App">
        <Header isRegistered={this.state.isRegistered} 
        updateRegistrationHandler ={this.updateRegistrationHandler}/>
        <Switch>
          <Route exact path="/" component={ContactList}></Route>
          <Route exact path="/sign-up" component={SignUp}></Route>
          <Route exact path="/log-in" component={LogIn}></Route>
        </Switch>
        <Footer author={"rouqaya abdulhaq"}/>
        <Palette/>
      </div>
    </Router>
    );
  }
}

export default App;
