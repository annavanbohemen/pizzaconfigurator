import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { chooseToppings, removeTopping } from '../actions/choice.js'
import { pizzaToppings } from '../values/values'
import store from '../store'
import CheckBox from 'material-ui/Checkbox'

class PizzaToppings extends PureComponent {

    
    
     handleChange = (event) => {
        if (event.target.checked) {
            store.dispatch(chooseToppings(event.target.value))
        }  else {
            store.dispatch(removeTopping(event.target.value)) 
        }
     }


    render(){
        return(
            <div>
                <h3> Choose your toppings:</h3>
                    <p> max. 3 toppings, toppings cost € 0,50 a piece</p>
                    {
                    Object.keys(pizzaToppings).map((name, i) =>
                        <label key={i}>
                            <CheckBox name="topping" value={name} onChange={ this.handleChange } />{name} <br/ >
                        </label>)
                    } 
            </div>
        )
    }
}

export default connect(null, { chooseToppings })(PizzaToppings)

// // _Rules: max. 3 toppings, toppings cost € 0,50 apiece_
