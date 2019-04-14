import React, { Component } from 'react';
import './App.css';
import Logo from './components/logo/logo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo/>
        <Logo/>
      
        {/*
         <Regestration/>
         <ContactsList/>
         <Footer/>
         <Palette/>
        */}
      </div>
    );
  }
}

export default App;
