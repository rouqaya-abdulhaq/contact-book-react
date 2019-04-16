import React, { Component } from 'react';
import './App.css';
import Logo from './components/logo/logo';
import Regestration from './containers/regestration/regestration';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo/>
        <Regestration/>
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
