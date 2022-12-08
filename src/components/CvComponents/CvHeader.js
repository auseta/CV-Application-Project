import React, { Component } from 'react';

export default class CvHeader extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div className='cv--header'>
        <h2>{ this.props.info.fullName }</h2>
        <h4>{ this.props.info.jobPosition }</h4>
      </div>
    )
  }
}