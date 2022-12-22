import React from "react";

const Resume = ({ info }) => {

  return (
    <div className="resume">
      <div className="resume--tile resume--tile--one">
        <div>
          <h2>{ info.fullName }</h2>
          <p>{ info.jobTitle }</p>
        </div>
        <ul>
          <li>
           <i className="fas fa-envelope"></i>
            { info.email }
          </li>
          <li>
            <i className="fas fa-phone"></i>
            { info.phoneNumber }
          </li>
          <li>
            <i className="fas fa-map-marker-alt"></i>
            { info.address }
          </li>
        </ul>
      </div>
      <div className="resume--tile resume--tile--two">
        <h2>Education</h2>
        <ul>
          <li className="li-bullet">{ info.school }</li>
          &#8212;
          <li>{ info.studyTitle }</li>
        </ul>
        <ul>
          <li>{ info.startOfStudies }</li>
          &#8212;
          <li>{ info.endOfStudies }</li>
        </ul>
      </div>
      <div className="resume--tile resume--tile--three">
        <h2>Work Experience</h2>
        <ul>
          <li className="li-bullet">{ info.companyName }</li>
          &#8212;
          <li>{ info.jobPosition }</li>
        </ul>
        <ul>
          <li>{ info.startOfJob }</li>
          &#8212;
          <li>{ info.endOfJob }</li>
        </ul>
        <p>{ info.jobTasks }</p>
      </div>
    </div>
  );
};

export default Resume