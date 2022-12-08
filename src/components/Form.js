import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <form>
        <div className='form--tile--one'>
          <div>
            <label htmlFor='full-name'>
              Full name
            </label>
            <input type='text' id='full-name' onChange={this.props.listeners.handleName} value={this.props.info.fullName} required/>
          </div>
          <div>
            <label htmlFor='job-title'>
              Job Title
            </label>
            <input type='text' id='job-title' onChange={this.props.listeners.handleJobPosition} value={ this.props.info.jobPosition } />
          </div>
        </div>
      </form>
    )
  }
}