import React from "react";

export default class PersonalInfo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.handlers);
    return (
        <div className="info ">
          <h2>Personal Details</h2>
          <div className="form--field">
            <label>Full Name</label>
            <input type="text" placeholder="e.g; John Schmoe" onChange={ this.props.handlers.setName } />
          </div>
          <div className="form--field">
            <label>Job Title</label>
            <input type="text" placeholder="e.g; Web Developer" onChange={ this.props.handlers.setJobTitle } />
          </div>
          <div className="form--field">
            <label>Email</label>
            <input type="email" placeholder="e.g; example@gmail.com" onChange={ this.props.handlers.setMail } />
          </div>
          <div className="form--field">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder="e.g; +111 1234 123456" onChange={this.props.handlers.setPhoneNumber} />
          </div>
          <div className="form--field">
            <label>Address</label>
            <input type="text" placeholder="e.g; Fake Street 123" onChange={this.props.handlers.setAddress} />
          </div>
        </div>
    );
  }
}
