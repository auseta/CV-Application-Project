import React, { Component } from 'react';

export default class CvHeader extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div className='cv--header'>
        <div className='cv--header--left'>
          <h5><i class="fa-solid fa-envelope"></i> { this.props.info.mail }</h5>
          <h5><i class="fa-solid fa-phone"></i> { this.props.info.phone }</h5>
        </div>
        <div className='cv--header--mid'>
          <h2>{ this.props.info.fullName ? this.props.info.fullName : 'Your Name' }</h2>
          <h4>{ this.props.info.jobPosition }</h4>
        </div>
        <div className='cv--header--right'>
          <h5><i class="fa-brands fa-linkedin"></i> https://www.linkedin.com/in/augusto-seta/</h5>
          <h5><i class="fa-brands fa-github"></i> https://github.com/auseta</h5>
        </div>
      </div>
    )
  }
}