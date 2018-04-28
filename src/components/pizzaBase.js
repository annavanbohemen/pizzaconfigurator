import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { makeChoice } from '../actions/choice.js'

class PizzaBase extends PureComponent {
    state = {}

    getInitialState = () => {
        return {
          selectedOption: '20cm NY Style'
        };
      }

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.makeChoice(this.state);
	}

	handleChange = (event) => {
    this.setState({
        selectedOption: event.target.value
    })
  }

    render(){

        return(
            <div>
              <h3> Choose your base:</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="radio" name="base" value="20cm NY Style" 
                    onChange={ this.handleChange } checked={this.state.selectedOption === '20cm NY Style'} /> 20cm NY Style - € 6,45<br />
                    <input type="radio" name="base" value="25cm NY Style" 
                    onChange={ this.handleChange } checked={this.state.selectedOption === '25cm NY Style'}/> 25cm NY Style - € 8,99<br />
                    <input type="radio" name="base" value="30cm NY Style" 
                    onChange={ this.handleChange } checked={this.state.selectedOption === '30cm NY Style'}/> 30cm NY Style - € 11,49<br />
                    <input type="radio" name="base" value="35cm NY Style" 
                    onChange={ this.handleChange } checked={this.state.selectedOption === '35cm NY Style'}/> 35cm NY Style - € 13,49
                </form>

              
            </div>
        )
    }
}
 
export default connect(null, { makeChoice })(PizzaBase)



