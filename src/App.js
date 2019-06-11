import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
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
      isRegistered: true,
      headerType: "signOutHeader",
    }
  }
  //i want to extract all the header handlers to adifferent component when i clean the code
  updateRegistrationHandler = () =>{
      this.setState({isRegistered : !this.state.isRegistered})
  }

  updateHeaderType= () =>{
    let newHeaderType = (this.state.headerType === "signOutHeader") ? "registrationHeader" : "signOutHeader";
    this.setState({headerType : newHeaderType})

  }

  updateHeaderHandler = () =>{
    this.updateRegistrationHandler();
    this.updateHeaderType();
  }

  render() {
    return (
    <Router>
      <div className="App">
        <Header isRegistered={this.state.isRegistered} 
        updateHeaderHandler ={this.updateHeaderHandler}
        headerType={this.state.headerType}/>
        <Switch>
          <Route exact path="/" component={ContactList}></Route>
          <Route exact path="/sign-up" 
          render={(props)=> <SignUp updateHeaderHandler={this.updateHeaderHandler} 
          isAuthed={true}/>} 
          ></Route>
          <Route exact path="/log-in" 
          render={(props)=> <LogIn updateHeaderHandler={this.updateHeaderHandler}
          isAuthed={true} />}>
          </Route>
        </Switch>
        <Footer author={"rouqaya abdulhaq"}/>
        <Palette/>
      </div>
    </Router>
    );
  }
}

export default App;
