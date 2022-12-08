import React, { Component } from 'react';
import CvHeader from './CvComponents/CvHeader';

export default class CV extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props)
    return (
      <div className='cv--container'>
        <CvHeader
          info={this.props.info}
        />
      </div>
    )
  }
}