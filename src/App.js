import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import ContactList from './containers/contact-list/contactList';
import Footer from "./components/footer/footer";
import Palette from "./components/palette/palette";





class App extends Component {
  constructor(){
    super();
    this.state = {
      styles : []
    }
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <ContactList/>
        <Footer author={"rouqaya abdulhaq"}/>
         <Palette/>
      </div>
    );
  }
}

export default App;
