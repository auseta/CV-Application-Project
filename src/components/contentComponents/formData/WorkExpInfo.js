import React from 'react';

export default class WorkExpInfo extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {

    return (
      <div className='info'>
        <h2>Work Experience</h2>
        <div className='form--field' >
          <label htmlFor='company'>Company</label>
          <input type='text' id='company' placeholder='e.g; Space X' onChange={this.props.handlers.setCompanyName} />
        </div>
        <div className='form--field'>
          <label htmlFor='position'>Position</label>
          <input type='text' id='position' placeholder='e.g; Web Developer' onChange={ this.props.handlers.setJobPosition } />
        </div>
        <div className='form--field'>
          <label htmlFor='start-date'>Start date</label>
          <input type='date' id='start-date' onChange={ this.props.handlers.setStartOfJob } />
        </div>
        <div className='form--field'>
          <label htmlFor='end-date'>End date</label>
          <input type='date' id='end-date' onChange={ this.props.handlers.setEndOfJob }  />
        </div>
        <div className='form--field'>
          <label htmlFor='work-tasks'>Tasks you performed</label>
          <textarea onChange={ this.props.handlers.setJobTasks } />
        </div>
      </div>
    )
  }
}