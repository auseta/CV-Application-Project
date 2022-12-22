import React from 'react';

const WorkExpInfo = ({ handlers }) => {
  return (
    <div className='info'>
      <h2>Work Experience</h2>
      <div className='form--field' >
        <label htmlFor='company'>Company</label>
        <input type='text' id='company' placeholder='e.g; Space X' onChange={ handlers.setCompanyName } />
      </div>
      <div className='form--field'>
        <label htmlFor='position'>Position</label>
        <input type='text' id='position' placeholder='e.g; Web Developer' onChange={ handlers.setJobPosition } />
      </div>
      <div className='form--field'>
        <label htmlFor='start-date'>Start date</label>
        <input type='date' id='start-date' onChange={ handlers.setStartOfJob } />
      </div>
      <div className='form--field'>
        <label htmlFor='end-date'>End date</label>
        <input type='date' id='end-date' onChange={ handlers.setEndOfJob }  />
      </div>
      <div className='form--field'>
        <label htmlFor='work-tasks'>Tasks you performed</label>
        <textarea onChange={ handlers.setJobTasks } />
      </div>
    </div>
  )
}

export default WorkExpInfo;