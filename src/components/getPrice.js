import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { pizzaBases, pizzaSauces, pizzaToppings } from '../values/values'

class GetPrice extends PureComponent {

    totalPrice() {
        const basePrice = (this.props.base ? pizzaBases[this.props.base] : 0)
        const saucePrice = (this.props.sauce ? pizzaSauces[this.props.sauce] : 0)
      //  const toppingsPrice = (this.props.toppings ? pizzaToppings[this.props.toppings] : 0)
        
        const toppingsPrice = (this.props.toppings).map(topping => pizzaToppings[topping])
                                                   .reduce((sum, val) => sum + val, 0)
        return basePrice + saucePrice + toppingsPrice
        
    }
    
    render(){

        return(
            <div>
            € {this.totalPrice()}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
      base: state.bases,
      sauce: state.sauces,
      toppings: state.toppings
    }
  }
  
  export default connect(mapStateToProps)(GetPrice)

