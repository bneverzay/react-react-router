import React, { Component } from 'react';
import './App.css';
import Routing from './routes';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routing />
      </div>
    );
  }
}

export default App;
