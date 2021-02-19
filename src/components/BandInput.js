import React, { Component } from 'react'

class BandInput extends Component {
  
  state = {name: ''}
  
  handleChange = event => {
    this.setState({name: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>Add a band</p>
          <input type="text" onChange={this.handleChange} />
          <input type="submit" value="Add Band" />
        </form>
      </div>
    )
  }
}

export default BandInput
