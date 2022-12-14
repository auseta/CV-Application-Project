import React from 'react';
import EducationInfo from './formData/EducationInfo';
import PersonalInfo from './formData/PersonalInfo';
import WorkExpInfo from './formData/WorkExpInfo';

export default class Form extends React.Component {
  render() {

    return (
      <div className='resume--form'>
        <form>
          <PersonalInfo />
          <EducationInfo />
          <WorkExpInfo />
          <button>submit</button>
        </form>
      </div>
    )
  }
}