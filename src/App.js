import React, { Component } from 'react';
import './App.css';
import Header from './containers/header/header';
import ContactList from './containers/contact-list/contactList';
import Footer from "./components/footer/footer";



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <ContactList/>
        <Footer author={"rouqaya abdulhaq"}/>
        {/*
         <Palette/>
        */}
      </div>
    );
  }
}

export default App;
