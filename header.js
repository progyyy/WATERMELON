import React, { Component } from 'react'

import './App.css'
import icon from './icon.png'

class Head extends Component {
  render() {
    return (
        <div className="top">
            <img className="navbar-brand" src={icon} alt="icon" />
            <p className="navbar-item" href="test.js">LOG IN</p>
        </div>
    )
    }

}
export default Head