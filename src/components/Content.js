import React, { Component } from 'react';
import CV from './CV';
import Form from './Form';

export default class Content extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fullName : '',
      jobPosition : '',
      mail: '',
      phone: '',
    }

    this.handleName = this.handleName.bind(this)
    this.handleMail = this.handleMail.bind(this)
    this.handleJobPosition = this.handleJobPosition.bind(this)
    this.handlePhone = this.handlePhone.bind(this)
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

  handleMail(e) {
    this.setState(prev => {
      return {
        ...prev,
        mail : e.target.value
      }
    })
  }

  handlePhone(e) {
    this.setState(prev => {
      return {
        ...prev,
        phone : e.target.value
      }
    })
  }

  render() {

    const handleEvents = {
      handleName : this.handleName,
      handleJobPosition : this.handleJobPosition,
      handleMail : this.handleMail,
      handlePhone: this.handlePhone
    }

    return (
      <div className='app--content'>
        <Form 
          listeners={handleEvents}
        />
        <CV
          info={this.state}
        />
      </div>
    )
  }
}