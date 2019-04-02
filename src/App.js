import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
import Body from './component/Body';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
