import React, { Component } from 'react';
import CV from './CV';
import Form from './Form';

export default class Content extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fullName : '',
      jobPosition : ''
    }

    this.handleName = this.handleName.bind(this)
    this.handleJobPosition = this.handleJobPosition.bind(this)

  }

  
  handleName(e) {
    this.setState(prev => {
      return {
        ...prev,
        fullName : e.target.value
      }
    })
  }

  handleJobPosition(e) {
    this.setState(prev => {
      return {
        ...prev,
        jobPosition: e.target.value
      }
    })
  }

  render() {

    const handleEvents = {
      handleName : this.handleName,
      handleJobPosition : this.handleJobPosition
    }

    return (
      <div className='app--content'>
        <Form 
          info={this.state}
          listeners={handleEvents}
        />
        <CV
          info={this.state}
        />
      </div>
    )
  }
}