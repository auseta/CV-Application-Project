import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <form>
        <div className='tile form--tile--one'>
          <div className='tile-field'>
            <label htmlFor='full-name'>
              Full name
            </label>
            <input type='text' id='full-name' onChange={this.props.listeners.handleName} required/>
          </div>
          <div className='tile-field'>
            <label htmlFor='job-title'>
              Job Title
            </label>
            <input type='text' id='job-title' onChange={this.props.listeners.handleJobPosition} />
          </div>
        </div>
        <div className='tile form--tile--two'>
          <div className='tile-field'>
            <label htmlFor='user-mail'>Email</label>
            <input type='email' id='user-mail' onChange={this.props.listeners.handleMail} />
          </div>
          <div className='tile-field'>
            <label htmlFor='user-phone' >Phone</label>
            <input type='tel' id='user-phone' onChange={this.props.listeners.handlePhone} />
          </div>
        </div>
        <div className='tile form--tile--three'>
          <div className='tile-field'>
            <label>LinkedIn</label>
            <input type='text' />
          </div>
          <div className='tile-field'>
            <label>Github</label>
            <input type='text' />
          </div>
        </div>
      </form>
    )
  }
}