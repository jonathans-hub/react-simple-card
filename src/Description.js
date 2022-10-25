import React, { Component } from 'react'
import "./style.css"

export default class Description extends Component {
    render() {
    return (
      <div>
        <p className="description">{this.props.description}</p>
      </div>
    )
  }
}
