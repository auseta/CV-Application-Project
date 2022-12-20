import React from "react";
import Form from "./contentComponents/Form";
import Resume from "./contentComponents/Resume";
import { format, parseISO } from "date-fns";

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
        startOfStudies: 'Jan 13, 2010',
        endOfStudies: "Dec 18, 2015",
        companyName: "Awesome International Systems",
        jobPosition: "Web Developer",
        startOfJob: "Feb 23, 2017",
        endOfJob: "Nov 10, 2022",
        jobTasks : "As a memeber of the company i helped to reestructures all the building staff and improves the distribution times over alll the country."
      },
    };

    this.setName = (e) => this.setState(prev => ({ ...prev, newData : { ...prev.newData, fullName : e.target.value} }))
    this.setJobTitle = (e) => this.setState(prev => ({ ...prev, newData : { ...prev.newData, jobTitle : e.target.value } }))
    this.setMail = (e) => this.setState(prev => ({ ...prev, newData : { ...prev.newData, email : e.target.value}  }))
    this.setPhoneNumber = (e) => this.setState(prev => ({ ...prev, newData : { ...prev.newData, phoneNumber : e.target.value } }))
    this.setSchool = (e) => this.setState(prev => ({ ...prev, newData : { ...prev.newData, school : e.target.value } }))
    this.setAddress = (e) => this.setState(prev => ({ ...prev, newData: { ...prev.newData, address : e.target.value } }))
    this.setStudyTitle = (e) => this.setState(prev => ({ ...prev, newData: { ...prev.newData, studyTitle : e.target.value }  }))
    this.setStartOfStudies = (e) => this.setState(prev => ({ ...prev, newData: { ...prev.newData, startOfStudies : format( parseISO(e.target.value) , 'MMM dd, yyyy') } }))
    this.setEndOfStudies = (e) => this.setState(prev => ({ ...prev, newData: { ...prev.newData, endOfStudies : format(parseISO(e.target.value), 'MMM dd, yyyy') } }))
    this.setCompanyName = (e) => this.setState(prev => ({ ...prev, newData : { ...prev.newData, companyName: e.target.value } }))
    this.setJobPosition = (e) => this.setState(prev => ({ ...prev, newData : { ...prev.newData, jobPosition : e.target.value } }))
    this.setStartOfJob = (e) => this.setState(prev => ({ ...prev, newData : { ...prev.newData, startOfJob : format(parseISO(e.target.value), 'MMM dd, yyyy' ) } }))
    this.setEndOfJob = (e) => this.setState(prev => ({ ...prev, newData : { ...prev.newData, endOfJob : format(parseISO(e.target.value), 'MMM dd, yyyy')  } }))
    this.setJobTasks = (e) => this.setState(prev => ({ ...prev, newData : { ...prev.newData, jobTasks : e.target.value } }))
    this.submitHandler = (e) => {
      e.preventDefault()
      this.setState(prev => ({
        ...prev,
        resumeData : {
          fullName: prev.newData.fullName || 'Joe Schmoe' ,
          jobTitle: prev.newData.jobTitle || 'Web Developer' ,
          email: prev.newData.email || "johnschmoe97@gmail.com",
          phoneNumber: prev.newData.phoneNumber || "+11 1234 567899",
          address: prev.newData.address || "Fake Street 123",
          school: prev.newData.school || "Massachusetts Institute of Technology",
          studyTitle: prev.newData.studyTitle || "Systems engineering",
          startOfStudies:  prev.newData.startOfStudies || 'Jan 13, 2010',
          endOfStudies: prev.newData.endOfStudies || "Dec 18, 2015",
          companyName:  prev.newData.companyName || "Awesome International Systems",
          jobPosition: prev.newData.jobPosition || "Web Developer",
          startOfJob: prev.newData.startOfJob || "Feb 23, 2017",
          endOfJob: prev.newData.endOfJob || "Nov 10, 2022",
          jobTasks : prev.newData.jobTasks || "As a memeber of the company i helped to reestructures all the building staff and improves the distribution times over alll the country."
        }
      }))
    }

  }

  render() {

    const eventHandlers = {
      setName : this.setName,
      setJobTitle : this.setJobTitle,
      submitHandler : this.submitHandler,
      setMail : this.setMail,
      setPhoneNumber : this.setPhoneNumber,
      setAddress : this.setAddress,
      setSchool : this.setSchool,
      setStudyTitle : this.setStudyTitle,
      setStartOfStudies : this.setStartOfStudies,
      setEndOfStudies : this.setEndOfStudies,
      setCompanyName : this.setCompanyName,
      setJobPosition : this.setJobPosition,
      setStartOfJob : this.setStartOfJob,
      setEndOfJob : this.setEndOfJob,
      setJobTasks : this.setJobTasks,
    };

    return (
      <div className="app--wrapper">
        <Form handlers={eventHandlers} />
        <Resume info={this.state.resumeData} />
      </div>
    );
  }
}
