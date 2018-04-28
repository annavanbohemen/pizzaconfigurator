import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { makeChoice } from '../actions/choice.js'

class PizzaSauce extends PureComponent {
    state = {}

    render(){
        return(
            <div>
                <h3> Choose your sauce:</h3>
                    <form action="">
                        <input type="radio" name="sauce" value="White Sauce"/> White Sauce<br />
                        <input type="radio" name="sauce" value="Red sauce"/> Red sauce<br />
                        <input type="radio" name="sauce" value="Double red sauce"/> Double red sauce - € 1,00<br />
                        <input type="radio" name="sauce" value="Mix it u"/> Mix it u - € 1,50
                    </form>
            </div>
        )
    }
}
    
export default connect(null, { makeChoice })(PizzaSauce)
    