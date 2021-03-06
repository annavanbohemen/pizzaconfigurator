import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import GetPrice from './getPrice'
import './chozenPizza.css'


class ChozenPizza extends PureComponent {


  render() {
    return(
      <div className="pizzachoice">
        <h3>Chozen Pizza:</h3>
        <h6>Base:</h6>
        <p>  {this.props.base} </p>
        <h6>Sauce:</h6>
        <p>  {this.props.sauce} </p>
        <h6>Toppings:</h6>
        <ul> 
        {
            Object.values(this.props.toppings).map((name, i) => <li key={name}> {name} </li>)
        }
        </ul>
        <p className='price'>
         <GetPrice/>
        </p>
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

