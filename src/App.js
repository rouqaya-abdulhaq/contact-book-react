import React, { Component } from 'react';
import './App.css';
import Logo from './components/logo/logo';
import Registration from './containers/registration/registration';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo/>
        <Registration/>
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
