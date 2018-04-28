import React, { PureComponent } from 'react'
import { connect } from 'react-redux'



class ChozenPizza extends PureComponent {

  createPizzaChoice() {
    //console.log(this.props.choices);
    return this.props.choices.map((part) => {
      return (
        <li key={part}>{part}</li>
      )
    })
  }

  render() {
    return(
      <div className="pizzachoice">
        <ul>
        <li>Chozen Pizza:</li>
          {this.createPizzaChoice()}
        </ul>
        </div>
      )
    }
}

function mapStateToProps(state){
  //console.log(state);
  return {
    choices: state.choices
  }
}

export default connect(mapStateToProps)(ChozenPizza)