import React from "react";
import Form from "./contentComponents/Form";
import Resume from "./contentComponents/Resume";

export default class Content extends React.Component {
  constructor() {
    super();

    this.state = {
      newData: {
        fullName: "",
        jobTitle: "",
        email: "",
        phoneNumber: "",
        address: "",
        school: "",
        studyTitle: "",
        startOfStudies: "",
        endOfStudies: "",
        companyName: "",
        jobPosition: "",
        startOfJob: "",
        endOfJob: "",
      },
      resumeData: {
        fullName: "Joe Schmoe",
        jobTitle: "Web Developer",
        email: "johnschmoe97@gmail.com",
        phoneNumber: "+11 1234 567899",
        address: "Fake Street 123",
        school: "Massachusetts Institute of Technology",
        studyTitle: "Systems engineering",
        startOfStudies: new Date("January 13, 2010").toLocaleDateString(
          "en-us",
          { year: "numeric", month: "short", day: "numeric" }
        ),
        endOfStudies: new Date("December 18, 2015").toLocaleDateString(
          "en-us",
          { year: "numeric", month: "short", day: "numeric" }
        ),
        companyName: "Awesome International Systems",
        jobPosition: "Web Developer",
        startOfJob: new Date("February 23, 2017").toLocaleDateString("en-us", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        endOfJob: new Date("November 10, 2022").toLocaleDateString("en-us", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
      },
    };

    this.setName = this.setName.bind(this)
    this.setJobTitle = this.setJobTitle.bind(this)
    this.submitHandler = this.submitHandler.bind(this)

  }

  setName(e) {
    this.setState(prev => ({...prev, newData : { ...prev.newData, fullName : e.target.value}}))
  }

  setJobTitle(e) {
    this.setState(prev => ({...prev, newData : { ...prev.newData, jobTitle : e.target.value }}))
  }

  submitHandler(e) {
    e.preventDefault();
    this.setState(prev => ({
      ...prev,
      resumeData : {
        fullName: prev.newData.fullName || 'Joe Schmoe' ,
        jobTitle: prev.newData.jobTitle || 'Web Developer' ,
        email: "johnschmoe97@gmail.com",
        phoneNumber: "+11 1234 567899",
        address: "Fake Street 123",
        school: "Massachusetts Institute of Technology",
        studyTitle: "Systems engineering",
        startOfStudies: new Date("January 13, 2010").toLocaleDateString(
          "en-us",
          { year: "numeric", month: "short", day: "numeric" }
        ),
        endOfStudies: new Date("December 18, 2015").toLocaleDateString(
          "en-us",
          { year: "numeric", month: "short", day: "numeric" }
        ),
        companyName: "Awesome International Systems",
        jobPosition: "Web Developer",
        startOfJob: new Date("February 23, 2017").toLocaleDateString("en-us", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        endOfJob: new Date("November 10, 2022").toLocaleDateString("en-us", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
      }
    }))
  }

  render() {

    const eventHandlers = {
      setName : this.setName,
      setJobTitle : this.setJobTitle,
      submitHandler : this.submitHandler
    };

    return (
      <div className="app-wrapper">
        <Form handlers={eventHandlers} />
        <Resume info={this.state.resumeData} />
      </div>
    );
  }
}
