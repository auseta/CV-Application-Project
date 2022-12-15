import React from "react";

export default class Resume extends React.Component {

  render() {
    return (
      <div className="resume">
        <div className="resume--tile resume--tile--one">
          <div>
            <h2>{this.props.info.fullName}</h2>
            <p>{this.props.info.jobTitle}</p>
          </div>
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              {this.props.info.email}
            </li>
            <li>
              <i className="fas fa-phone"></i>
              {this.props.info.phoneNumber}
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              {this.props.info.address}
            </li>
          </ul>
        </div>
        <div className="resume--tile resume--tile--two">
          <h2>Education</h2>
          <ul>
            <li className="li-bullet">{ this.props.info.school }</li>
            &#8212;
            <li>{ this.props.info.studyTitle }</li>
          </ul>
          <ul>
            <li>{ this.props.info.startOfStudies }</li>
            &#8212;
            <li>{ this.props.info.endOfStudies }</li>
          </ul>
        </div>
        <div className="resume--tile resume--tile--three">
          <h2>Work Experience</h2>
          <ul>
            <li className="li-bullet" >{ this.props.info.companyName }</li>
            &#8212;
            <li>{ this.props.info.jobPosition }</li>
          </ul>
          <ul>
            <li>{ this.props.info.startOfJob }</li>
            &#8212;
            <li>{ this.props.info.endOfJob }</li>
          </ul>
          <p>
            As a memeber of the company i helped to reestructures all the building staff and improves the distribution times over alll the country
          </p>
        </div>
      </div>
    );
  }
}
