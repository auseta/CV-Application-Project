import React from 'react';

export default class EducationInfo extends React.Component {
  render() {
    return (
      <div className='info'>
        <h2>Education</h2>
        <div className='form--field'>
          <label htmlFor='school-name'>School name</label>
          <input type='text' id='school-name' onChange={ this.props.handlers.setSchool } placeholder='e.g; Massachusetts Institute of Technology' />
        </div>
        <div className='form--field'>
          <label htmlFor='title-of-study'>Title of study</label>
          <input type='text' id='title-of-study' onChange={ this.props.handlers.setStudyTitle } placeholder='e.g; Web Developer'/>
        </div>
        <div className='form--field'>
          <label htmlFor='study-start-date'>Start date</label>
          <input type='date' id='study-start-date' onChange={ this.props.handlers.setStartOfStudies } />
        </div>
        <div className='form--field'>
          <label htmlFor='study-end-date'>End date</label>
          <input type='date' id='study-end-date' onChange={ this.props.handlers.setEndOfStudies } />
        </div>
      </div>
    )
  }
}