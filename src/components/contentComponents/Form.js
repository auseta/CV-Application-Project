import React from 'react';
import EducationInfo from './formData/EducationInfo';
import PersonalInfo from './formData/PersonalInfo';
import WorkExpInfo from './formData/WorkExpInfo';

const Form = ({ handlers }) => {

  console.log('Form Component: ', handlers);
  return (
    <div className='resume--form'>
      <form onSubmit={ handlers.submitHandler } >
        <PersonalInfo handlers={ handlers } />
        <EducationInfo handlers={ handlers } />
        <WorkExpInfo  handlers={ handlers } />
        <button type='submit' >Generate Resume</button>
      </form>
    </div>
  )
}

export default Form;