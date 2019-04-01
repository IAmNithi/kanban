import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
import Body from './component/Body';
import Banner from './component/Banner';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <Body />
      </div>
    );
  }
}

export default App;
