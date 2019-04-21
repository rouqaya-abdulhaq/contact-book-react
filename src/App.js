import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
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
