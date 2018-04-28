import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { chooseBase } from '../actions/choice.js'
import { pizzaBases } from '../values/values'
import store from '../store'

class PizzaBase extends PureComponent {
    
    handleChange = (event) => {
        store.dispatch(chooseBase({value: event.target.value}))
    }

 

    render(){

        return(
            <div>
              <h3> Choose your base:</h3>
              {
                 Object.keys(pizzaBases).map((name, i) =>
                    <label key={i}>
                    <input  type="radio" name="base" value={name} onChange={ this.handleChange } />
                    {name} <br/ ></label>)
              }            
            </div>
        )
    }
}
 
export default connect(null, { chooseBase })(PizzaBase)
   