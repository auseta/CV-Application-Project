import React from 'react';
import EducationInfo from './formData/EducationInfo';
import PersonalInfo from './formData/PersonalInfo';
import WorkExpInfo from './formData/WorkExpInfo';

export default class Form extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('form', this.props.handlers.submitHandler)
    return (
      <div className='resume--form'>
        <form onSubmit={ this.props.handlers.submitHandler } >
          <PersonalInfo handlers={this.props} />
          <EducationInfo />
          <WorkExpInfo />
          <button type='submit' >Generate Resume</button>
        </form>
      </div>
    )
  }
}