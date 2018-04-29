import React, { Component } from 'react';
import './App.css';
import PizzaBase from './components/pizzaBase.js'
import PizzaSauce from './components/pizzaSauce.js'
import ChozenPizza from './components/chozenPizza.js'
import PizzaToppings from './components/pizzaToppings.js'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title">New Age Pizza</h1>
        </header>
        <Paper className="configurator">
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6}>
              <PizzaBase/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <PizzaSauce/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <PizzaToppings/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className="choice">
                <ChozenPizza/>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
        
      </div>
    );
  }
}

export default App;
