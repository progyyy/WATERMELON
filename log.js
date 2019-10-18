import React, { Component } from 'react'

import './App.css'

class Log extends Component {
  render() {
    return (
      <div>
          <div className="section">
        
        <h1>{ this.props.formTitle }</h1>
        <form onSubmit={this.onChangeSubmit}>
            <p>User name</p>
            <input className="txt" type="text" name="quantity" onChange={this.onChange} />
            <p>Password</p>
            <input className="txt" type="text" name="designation" onChange={this.onChange} />
            <button className="btn" type="submit">LOG IN</button>
        </form>
        </div>
      </div>
    )
  }

  constructor (props) {
    super(props)
    this.state={
      quantity: 0, designation: ''
    }
    this.onChange = this.onChangeHandle.bind(this)
    this.onChangeSubmit = this.onChangeSubmit.bind(this)
  }

  onChangeHandle(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log('changement' + [event.target.name])
  }

  onChangeSubmit(event) {
    event.preventDefault()
    console.log('submit')
    this.props.addArticles(this.state)
  }

}

export default Log