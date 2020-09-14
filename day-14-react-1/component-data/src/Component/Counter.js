import React, { Component } from 'react'

// Statefull component
export default class Counter extends Component {
  constructor() {
    super()
    this.state = {
      countNum: 0
    }
  }

  increment = () => {
    this.setState({
      countNum: this.state.countNum + 1
    })
  }

  render() {
    return (
      <div>
        <button>-</button>
        <h1 style={{display: "inline"}}>{this.state.countNum}</h1>
        <button onClick={this.increment}>+</button>
      </div>
    )
  }
}
