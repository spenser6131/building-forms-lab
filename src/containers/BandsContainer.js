import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

class BandsContainer extends Component {


  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        {this.props.bands.map((band, i) => <li key={i}>{band.name}</li>)}
      </div>
    )
  }
}

const mSTP = state => {
  return {
    bands: state.bands
  }
}

const mDTP = dispatch => {
  return {
    addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData })
  }
}

export default connect(mSTP, mDTP)(BandsContainer)
