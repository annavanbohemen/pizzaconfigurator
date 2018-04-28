import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import GetPrice from './getPrice'


class ChozenPizza extends PureComponent {

// function for calculating cost

  render() {
    return(
      <div className="pizzachoice">
        <h3>Chozen Pizza:</h3>
        <h6>BASE:</h6>
        <p>  {this.props.base} </p>
        <h6>SAUCE:</h6>
        <p>  {this.props.sauce} </p>
        <h6>TOPPINGS:</h6>
        <ul> 
        {
            Object.values(this.props.toppings).map((name, i) => <li key={name}> {name} </li>)
        }
        </ul>
        <GetPrice/>
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

export default connect(mapStateToProps)(ChozenPizza)

