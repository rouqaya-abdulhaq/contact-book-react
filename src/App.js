import React, { Component } from 'react';
import './App.css';
import Header from './containers/header/header';
import ContactList from './containers/contact-list/contactList';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <ContactList/>
        {/*
         <Footer/>
         <Palette/>
        */}
      </div>
    );
  }
}

export default App;
