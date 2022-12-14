import React from 'react';

export default class Resume extends React.Component {
  render() {
    return (
      <div className='resume'>
        <div className='resume--tile--one'>
          <div>
            <h2>Augusto L. Seta</h2>
            <p>Web Developer</p>
          </div>
          <ul>
            <li><i class="fas fa-envelope"></i>augustoseta97@gmail.com</li>
            <li><i class="fas fa-phone"></i>+54 2477 537808</li>
            <li><i class="fas fa-map-marker-alt"></i>Carlos Gardel 1648</li>
          </ul>
        </div>
      </div>
    )
  }
}