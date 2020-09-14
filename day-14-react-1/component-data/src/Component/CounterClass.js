import React, { Component } from 'react'

// Statefull component
export default class CounterClass extends Component {
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
        <h1>Counter Class</h1>
        <button>-</button>
        <h3 style={{display: "inline"}}>{this.state.countNum}</h3>
        <button onClick={this.increment}>+</button>
        <hr/>
      </div>
    )
  }
}
