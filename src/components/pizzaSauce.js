import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { chooseSauce } from '../actions/choice.js'
import { pizzaSauces } from '../values/values'
import store from '../store'
import Radio from 'material-ui/Radio'

class PizzaSauce extends PureComponent {
    state = {
        value: '',
      };
    
    handleChange = (event) => {
        this.setState({ value: event.target.value });
        store.dispatch(chooseSauce({value: event.target.value}))
    }

    render(){
        return(
            <div>
             <h3> Choose your sauce:</h3>
              {
              Object.keys(pizzaSauces).map((name, i) =>
                <label key={i}>
                    <Radio name="sauce" checked={this.state.value === name} value={name} onChange={ this.handleChange } />{name} <br/ >
                </label>)
              } 
            </div>
        )
    }
}
    
export default connect(null, { chooseSauce })(PizzaSauce)
    
 