import React from 'react';
import Form from './contentComponents/Form';
import Resume from './contentComponents/Resume';

export default class Content extends React.Component {
  render() {
    return (
      <div className='app-wrapper'>
        <Form />
        <Resume />
      </div>
    )
  }
}