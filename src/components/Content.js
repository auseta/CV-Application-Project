import React, { useState } from "react";
import Form from "./contentComponents/Form";
import Resume from "./contentComponents/Resume";
import { format, parseISO } from "date-fns";

const Content = () => {
  const [state, setState] = useState({
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
      jobTasks : "As a memeber of the company i helped to reestructures all the building staff and improves the distribution times over alll the statery."
    }
  })

  const setName = (e) => setState({ ...state, newData: { ...state.newData, fullName : e.target.value } });
  const setJobTitle = (e) => setState({ ...state, newData: { ...state.newData, jobTitle : e.target.value } });
  const setMail = (e) => setState({ ...state, newData: { ...state.newData, email : e.target.value } });
  const setPhoneNumber = (e) => setState({ ...state, newData: { ...state.newData, phoneNumber : e.target.value } });
  const setSchool = (e) => setState({ ...state, newData: { ...state.newData, school : e.target.value } });
  const setAddress = (e) => setState({ ...state, newData: { ...state.newData, address : e.target.value } });
  const setStudyTitle = (e) => setState({ ...state, newData: { ...state.newData, studyTitle : e.target.value } });
  const setStartOfStudies = (e) => setState({ ...state, newData: { ...state.newData, startOfStudies : format( parseISO(e.target.value) , 'MMM dd, yyyy') } })
  const setEndOfStudies = (e) => setState({ ...state, newData: { ...state.newData, endOfStudies : format( parseISO(e.target.value) , 'MMM dd, yyyy') } })
  const setCompanyName = (e) => setState({ ...state, newData: { ...state.newData, companyName : e.target.value }  })
  const setJobPosition = (e) => setState({ ...state, newData : { ...state.newData, jobPosition : e.target.value } })
  const setStartOfJob = (e) => setState({ ...state, newData : { ...state.newData, startOfJob : format( parseISO(e.target.value) , 'MMM dd, yyyy') } })
  const setEndOfJob = (e) => setState({ ...state, newData : { ...state, newData : { ...state.newData, endOfJob : format( parseISO(e.target.value) , 'MMM dd, yyyy') } } })
  const setJobTasks = (e) => setState({ ...state, newData: { ...state.newData, jobTasks : e.target.value } })
  const submitHandler = (e) => {
    e.preventDefault();
    setState({
      ...state,
      resumeData : {
        fullName: state.newData.fullName || 'Joe Schmoe' ,
        jobTitle: state.newData.jobTitle || 'Web Developer' ,
        email: state.newData.email || "johnschmoe97@gmail.com",
        phoneNumber: state.newData.phoneNumber || "+11 1234 567899",
        address: state.newData.address || "Fake Street 123",
        school: state.newData.school || "Massachusetts Institute of Technology",
        studyTitle: state.newData.studyTitle || "Systems engineering",
        startOfStudies:  state.newData.startOfStudies || 'Jan 13, 2010',
        endOfStudies: state.newData.endOfStudies || "Dec 18, 2015",
        companyName:  state.newData.companyName || "Awesome International Systems",
        jobPosition: state.newData.jobPosition || "Web Developer",
        startOfJob: state.newData.startOfJob || "Feb 23, 2017",
        endOfJob: state.newData.endOfJob || "Nov 10, 2022",
        jobTasks : state.newData.jobTasks || "As a memeber of the company i helped to reestructures all the building staff and improves the distribution times over alll the statery."
      }
    })
  }

  const eventHandlers = {
    setName : setName,
    setJobTitle : setJobTitle,
    submitHandler : submitHandler,
    setMail : setMail,
    setPhoneNumber : setPhoneNumber,
    setAddress : setAddress,
    setSchool : setSchool,
    setStudyTitle : setStudyTitle,
    setStartOfStudies : setStartOfStudies,
    setEndOfStudies : setEndOfStudies,
    setCompanyName : setCompanyName,
    setJobPosition : setJobPosition,
    setStartOfJob : setStartOfJob,
    setEndOfJob : setEndOfJob,
    setJobTasks : setJobTasks,
  };

  return(
    <div className="app--wrapper">
      <Form handlers={eventHandlers} />
      <Resume info={state.resumeData} />      
    </div>
  )
}

export default Content