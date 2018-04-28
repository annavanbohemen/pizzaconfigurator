import React, { Component } from 'react';
import './App.css';
import PizzaBase from './components/pizzaBase.js'
import ChozenPizza from './components/chozenPizza.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title">New Age Pizza</h1>
        </header>
        <p className="intro">
          Configurate your own pizza! 
        </p>
        <PizzaBase/>
        <ChozenPizza/>
      </div>
    );
  }
}

export default App;
