import React from 'react';
import EducationInfo from './formData/EducationInfo';
import PersonalInfo from './formData/PersonalInfo';
import WorkExpInfo from './formData/WorkExpInfo';

export default class Form extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('Form Component: ', this.props);
    return (
      <div className='resume--form'>
        <form onSubmit={ this.props.handlers.submitHandler } >
          <PersonalInfo handlers={ this.props.handlers } />
          <EducationInfo handlers={ this.props.handlers } />
          <WorkExpInfo  handlers={ this.props.handlers } />
          <button type='submit' >Generate Resume</button>
        </form>
      </div>
    )
  }
}