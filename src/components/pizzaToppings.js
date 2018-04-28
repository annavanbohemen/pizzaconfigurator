import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { makeChoice } from '../actions/choice.js'

class PizzaToppings extends PureComponent {
    state = {}

    render(){
        return(
            <div>
                <h3> Choose your toppings:</h3>
                    <p> max. 3 toppings, toppings cost € 0,50 a piece</p>
                    <form action="">
                        <input type="checkbox" name="topping" value="Pineapple"/>Pineapple<br />
                        <input type="checkbox" name="topping" value="Corn"/>corn<br /> 
                        <input type="checkbox" name="topping" value="Olives (green)"/>Olives (green)<br /> 
                        <input type="checkbox" name="topping" value="Red onion"/>Red onion<br /> 
                        <input type="checkbox" name="topping" value="Spinach"/>Spinach<br /> 
                        <input type="checkbox" name="topping" value="Cherry tomatoes"/>Cherry tomatoes<br /> 
                        <input type="checkbox" name="topping" value="Chicken"/>Chicken<br /> 
                    </form>
            </div>
        )
    }
}

export default connect(null, { makeChoice })(PizzaToppings)

// _Rules: max. 3 toppings, toppings cost € 0,50 apiece_
