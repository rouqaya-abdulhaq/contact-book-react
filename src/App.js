import React, { Component } from 'react';
import './App.css';
import Logo from './components/logo/logo';
import Regestration from './components/regestration/regestration';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo/>
        <Regestration  value="sign out"/>
        {/*
         <ContactsList/>
         <Footer/>
         <Palette/>
        */}
      </div>
    );
  }
}

export default App;
