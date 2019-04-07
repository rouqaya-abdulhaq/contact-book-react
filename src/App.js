import React, { Component } from 'react';
import './App.css';
import Card from "./components/card/card";
import Form from './containers/form/form';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Form/>
        <Card/>
      </div>
    );
  }
}

export default App;
