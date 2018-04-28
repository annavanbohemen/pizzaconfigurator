import React, { PureComponent } from 'react'
import { connect } from 'react-redux'



class ChozenPizza extends PureComponent {

  createPizzaChoice() {
    //console.log(this.props.choices);
    // return this.props.choices.map((choice) => {
    //   return (
    //     <li key={choice}>{choice}</li>
    //   )
    // })
  }

  render() {
    return(
      <div className="pizzachoice">
        <ul>
        <li>Chozen Pizza:</li>
          {this.props.base}
        </ul>
        </div>
      )
    }
}

function mapStateToProps(state){
  //console.log(state);
  return {
    base: state.choices
  }
}

export default connect(mapStateToProps)(ChozenPizza)