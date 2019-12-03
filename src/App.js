import React, { Component } from 'react';
// import './javascript/main.js';
// import './javascript/jszip.js';
// import './javascript/jszip-utils.js';
// import './javascript/docxtemplater-latest.js';
import './css/style2.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);





class App extends Component {
  render() {
    return (
      <div className="App">
         
         <Start />
         
         <AppHeader />
         
         <Apppart />
        
        <ApppendingLoadJSON />

      </div>
    )
  }
}
class Start extends React.Component {
  render(){
    return (
      <head>
    <link href="https://fonts.googleapis.com/css?family=Rajdhani" rel="stylesheet" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
    <link rel="stylesheet" type="text/css" href="style.css" />
</head>
      )
  }
}

class AppHeader extends React.Component {
  render(){
    return (
      <div class="header">
        <h1>IVE IA Document Generator</h1>
        <a class="credit">All credit goes to: Mark Lai IT114115/2B 2017-2018 Wan Ka Chi IT114115/2A 2019-2020 Wong Hok
            Leung IT114115/2A 2019-2020</a>
    </div>
      );
  }
}
class Apppart extends React.Component {
  render() {
    return (
      <div className="part">
        <h4>Instruction</h4>
        <div className="inner">
            <div className="warning">[ ! Important ! ]</div>
            If you are running at local machine, make sure you see the following message on chrome :
            <div className="warning-box">You are using a unsupported command-line flag: --disable-web-security</div>
            If not, Make sure you are running this file through run.bat with admin right<br />
            &nbsp;&nbsp;<br /><br /><br />

            1. Fill in this form<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;or<br />
            &nbsp;&nbsp;&nbsp;Load existing json from below (If you have)<br /><br />

            2. Press "Generate IA Doc"<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;or<br />
            &nbsp;&nbsp;&nbsp;"save as JSON" (If you want to edit the info later)<br /><br />

            3. Sign the IA document at page 6, 7, 11, 13, 14, 16, 18
        </div>
      </div>
      );
  }
}

class ApppendingLoadJSON extends React.Component {
  render() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <title>IVE IA Document Generator</title>
        <link href="https://fonts.googleapis.com/css?family=Rajdhani" rel="stylesheet" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
        <link rel="stylesheet" type="text/css" href="style.css" />
        <div className="container">
          <div className="part">
            <h4>Read existing JSON file</h4>
            <div className="inner">
              <input type="file" id="fileToLoad" />
              <button onclick="loadJSON()">Load JSON</button>
            </div>
          </div>
          <form className="was-validated" onsubmit="generateFile();return false;">
            <div className="part">
              <h4>Program Information</h4>
              <div className="error"><i className="fas fa-times" />&nbsp;&nbsp;<span className="count">0</span></div>
              <div className="inner">
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="first_year">Year</label>
                  </div>
                  <div className="col-2">
                    <input className="form-control is-invalid" type="number" id="first_year" min={1000} max={9999} required />
                  </div>
                  <div className="col-0.5">
                    至
                  </div>
                  <div className="col-2">
                    <input className="form-control is-invalid" type="number" id="this_year" min={1000} max={9999} required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="st_no">Student ID</label>
                  </div>
                  <div className="col-8">
                    <input type="number" id="st_no" className="form-control is-invalid" min={100000000} max={999999999} required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="campus">Campus</label></div>
                  <div className="col-8">
                    <input type="text" id="campus" className="form-control is-invalid" defaultValue="Lee Wai Lee" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="department">Department</label>
                  </div>
                  <div className="col-8">
                    <input type="text" id="department" className="form-control is-invalid" defaultValue="Information Technology" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="department_head">Department Head</label>
                  </div>
                  <div className="col-8">
                    <input type="text" id="department_head" className="form-control is-invalid" defaultValue="Stanley Wong" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="program_title">Programme Title</label>
                  </div>
                  <div className="col-8">
                    <input type="text" id="program_title" className="form-control is-invalid" defaultValue="Higher Diploma in Cloud and Data Center Administration" required /></div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="program_no">Programme Code</label>
                  </div>
                  <div className="col-8">
                    <input type="text" className="form-control is-invalid" id="program_no" defaultValue="IT114115" minLength={8} maxLength={8} required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="class">Class</label>
                  </div>
                  <div className="col-8">
                    <input type="text" id="class" className="form-control is-invalid" defaultValue="2A" minLength={2} maxLength={2} required />
                  </div>
                </div>
              </div>
            </div>
            <div className="part">
              <h4>Personal information</h4>
              <div className="error"><i className="fas fa-times" />&nbsp;&nbsp;<span className="count">0</span></div>
              <div className="inner">
                <div className="form-row">
                  <div className="col-6 col-md-2 ">
                    <label htmlFor="chinese_name">Name</label>
                  </div>
                  <div className="col-6 col-md-5">
                    <span className="name_language">Chinese</span>
                    <input type="text" className="form-control is-invalid" id="chinese_name" required />
                  </div>
                  <div className="col-6 col-md-5">
                    <span className="name_language">English</span>
                    <input type="text" className="form-control is-invalid" id="eng_name" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="hkid_no">HKID Number</label>
                  </div>
                  <div className="col-md-2.5">
                    <span className="name_language">Format: A1234567</span>
                  </div>
                  <div className="col">
                    <input type="text" className="form-control is-invalid" id="hkid_no" minLength={8} maxLength={8} required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="tel_no">Tel</label>
                  </div>
                  <div className="col-8">
                    <input className="form-control is-invalid" type="tel" id="tel_no" pattern="[0-9]{8}" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="col-8">
                    <input type="email" id="email" className="form-control is-invalid" required />
                  </div>
                </div>
                <h5>
                  Medical Information
                </h5>
                <div className="form-row">
                  <div className="col-0.5">
                    <input type="checkbox" className="form_checkbox" id="medical_1" />
                  </div>
                  <div className="col-2">
                    <label htmlFor="Medical_Allergies">Allergies</label>
                  </div>
                  <div className="col">
                    <input className="form-control is-invalid" type="text" id="Medical_Allergies" />
                  </div>
                  <div className="col-2">
                    <span className="option">[optional]</span>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-0.5">
                    <input type="checkbox" className="form_checkbox" id="medical_2" />
                  </div>
                  <div className="col-2">
                    <label htmlFor="Medical_Prescription_Drugs">Prescription Drugs</label>
                  </div>
                  <div className="col">
                    <input className="form-control is-invalid" type="text" id="Medical_Prescription_Drugs" />
                  </div>
                  <div className="col-2">
                    <span className="option">[optional]</span>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-0.5">
                    <input type="checkbox" className="form_checkbox" id="medical_3" />
                  </div>
                  <div className="col-2">
                    <label htmlFor="Medical_Physical_Limitations">Physical Limitations</label>
                  </div>
                  <div className="col">
                    <input className="form-control is-invalid" type="text" id="Medical_Physical_Limitations" />
                  </div>
                  <div className="col-2">
                    <span className="option">[optional]</span>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-0.5">
                    <input type="checkbox" className="form_checkbox" id="medical_4" />
                  </div>
                  <div className="col-2">
                    <label htmlFor="Medical_Other">Other</label>
                  </div>
                  <div className="col">
                    <input className="form-control is-invalid" type="text" id="Medical_Other" />
                  </div>
                  <div className="col-2">
                    <span className="option">[optional]</span>
                  </div>
                </div>
                <h5>
                  Emergency Contact
                </h5>
                <div className="form-row">
                  <div className="col-2">
                    <label>Type</label>
                  </div>
                  <div className="col-1">Parent<input type="radio" className="form_radio" name="type" id="parent" defaultChecked />
                  </div>
                  <div className="col-1">Guardian<input type="radio" className="form_radio" name="type" id="guardian" /></div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="emergency_name">Name</label>
                  </div>
                  <div className="col-1.5">
                    <a className="name_language">English</a>
                  </div>
                  <div className="col">
                    <input type="text" className="form-control is-invalid" id="emergency_name" required />
                  </div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-2">
                    <label>Relationship</label>
                  </div>
                  <div className="col-0.5">son<input type="radio" className="form_radio" name="relationship" id="son" defaultChecked />
                  </div>
                  <div className="col-1">daughter<input type="radio" className="form_radio" name="relationship" id="daughter" />
                  </div>
                  <div className="col-1">ward<input type="radio" className="form_radio" name="relationship" id="ward" />
                  </div>
                </div>
              </div>
              <div className="inner">
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="emergency_place_of_work">Place of Work</label>
                  </div>
                  <div className="col">
                    <input type="text" className="form-control is-invalid" id="emergency_place_of_work" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="emergency_home_tel">Home Tel</label>
                  </div>
                  <div className="col-8">
                    <input className="form-control is-invalid" type="tel" id="emergency_home_tel" pattern="[0-9]{8}" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="emergency_mobile_tel">Mobile Tel</label>
                  </div>
                  <div className="col-8">
                    <input className="form-control is-invalid" type="tel" id="emergency_mobile_tel" pattern="[0-9]{8}" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="emergency_work_tel">Work Tel</label>
                  </div>
                  <div className="col-8">
                    <input className="form-control is-invalid" type="tel" id="emergency_work_tel" pattern="[0-9]{8}" required />
                  </div>
                </div>
                <h5>Doctor Contact</h5>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="emergency_doctor">Name</label>
                  </div>
                  <div className="col-0.5">
                    <span className="name_language">English</span>
                  </div>
                  <div className="col">
                    <input className="form-control is-invalid" type="text" id="emergency_doctor" />
                  </div>
                  <div className="col-2">
                    <span className="option">[optional]</span>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="emergency_doctor_tel">Tel</label>
                  </div>
                  <div className="col">
                    <input className="form-control is-invalid" type="tel" id="emergency_doctor_tel" pattern="[0-9]{8}" />
                  </div>
                  <div className="col-2">
                    <span className="option">[optional]</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="part">
              <h4>IA Supervisor</h4>
              <div className="error"><i className="fas fa-times" />&nbsp;&nbsp;<span className="count">0</span></div>
              <div className="inner">
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="supervisor_name">Name</label>
                  </div>
                  <div className="col-1.5">
                    <a className="name_language">English</a>
                  </div>
                  <div className="col">
                    <input type="text" className="form-control is-invalid" id="supervisor_name" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="supervisor_post">Post</label>
                  </div>
                  <div className="col-8">
                    <input type="text" className="form-control is-invalid" id="supervisor_post" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="supervisor_phone">Phone</label>
                  </div>
                  <div className="col-8">
                    <input type="number" className="form-control is-invalid" id="supervisor_phone" min={10000000} max={99999999} required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="supervisor_email">Email</label>
                  </div>
                  <div className="col-8">
                    <input type="email" className="form-control is-invalid" id="supervisor_email" required />
                  </div>
                </div>
              </div>
            </div>
            <div className="part">
              <h4>IA Company</h4>
              <div className="error"><i className="fas fa-times" />&nbsp;&nbsp;<span className="count">0</span></div>
              <div className="inner">
                <h5>Company</h5>
                <div className="form-row">
                  <div className="col-6 col-md-2 ">
                    <label htmlFor="organization_chinese_name">Name</label>
                  </div>
                  <div className="col-6 col-md-5">
                    <span className="name_language">Chinese</span>
                    <input type="text" className="form-control is-invalid" id="organization_chinese_name" required />
                  </div>
                  <div className="col-6 col-md-5">
                    <span className="name_language">English</span>
                    <input type="text" className="form-control is-invalid" id="organization_eng_name" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="organization_address">Address</label>
                  </div>
                  <div className="col-8">
                    <input type="text" className="form-control is-invalid" id="organization_address" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label>Nature of Business</label>
                  </div>
                  <div className="col-0.5">SME<input type="radio" className="form_radio" name="nature" id="SME" defaultChecked />
                  </div>
                  <div className="col-1">Non-SME<input type="radio" className="form_radio" name="nature" id="Non-SME" />
                  </div>
                  <div className="col-1">NGO<input type="radio" className="form_radio" name="nature" id="NGO" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="registration_certificate">Business Registration Certificate No.</label>
                  </div>
                  <div className="col-8">
                    <input type="text" className="form-control is-invalid" id="registration_certificate" />
                  </div>
                </div>
                <h5>Mentor</h5>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="organization_mentor">Mentor Name</label>
                  </div>
                  <input type="radio" name="mentor_gender" defaultValue="Dr." defaultChecked />Dr.
                  <input type="radio" name="mentor_gender" defaultValue="Mr." />Mr.
                  <input type="radio" name="mentor_gender" defaultValue="Miss." />Miss.
                  <input type="radio" name="mentor_gender" defaultValue="Ms." />Ms.
                  <div className="col-1.5">
                    <a className="name_language">English</a>
                  </div>
                  <div className="col">
                    <input type="text" className="form-control is-invalid" id="organization_mentor" required /><br />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="organization_mentor_post">Mentor Position</label>
                  </div>
                  <div className="col-8">
                    <input type="text" className="form-control is-invalid" id="organization_mentor_post" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="organization_mentor_tel">Phone</label>
                  </div>
                  <div className="col-8">
                    <input type="tel" className="form-control is-invalid" id="organization_mentor_tel" pattern="[0-9]{8}" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="organization_mentor_fex">Fax</label>
                  </div>
                  <div className="col-8">
                    <input type="number" className="form-control is-invalid" id="organization_mentor_fex" min={10000000} max={99999999} />
                  </div>
                  <div className="col-2">
                    <span className="option">[optional]</span>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="organization_mentor_email">Email</label>
                  </div>
                  <div className="col-8">
                    <input type="email" className="form-control is-invalid" id="organization_mentor_email" required />
                  </div>
                </div>
                <h5>Job</h5>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="job_title">Job Title</label>
                  </div>
                  <div className="col-8">
                    <input type="text" className="form-control is-invalid" id="job_title" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="no_of_place">No. of Places</label>
                  </div>
                  <div className="col-8">
                    <input type="number" className="form-control is-invalid" id="no_of_place" defaultValue={1} required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="ia_department">Department</label>
                  </div>
                  <div className="col-8">
                    <input type="text" className="form-control is-invalid" id="ia_department" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="job_description">Job description</label>
                  </div>
                  <div className="col-8">
                    <input type="text" className="form-control is-invalid" id="job_description" defaultValue="Internship" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="skill_requir">Specialized Skills Required</label>
                  </div>
                  <div className="col-8">
                    <input type="text" className="form-control is-invalid" id="skill_requir" defaultValue="Programing" required />
                  </div>
                </div>
                <h5>Language Requirement</h5>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="chi_req">Chinese</label>
                  </div>
                  <input type="text" id="chi_req" style={{display: 'none'}} />
                  <div className="col-2">
                    <input type="radio" name="chi_req" defaultValue={0} defaultChecked />Fair
                  </div>
                  <div className="col-2">
                    <input type="radio" name="chi_req" defaultValue={1} />Fluent
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="eng_req">English</label>
                  </div>
                  <input type="text" id="eng_req" style={{display: 'none'}} />
                  <div className="col-2">
                    <input type="radio" name="eng_req" defaultValue={0} defaultChecked />Fair
                  </div>
                  <div className="col-2">
                    <input type="radio" name="eng_req" defaultValue={1} />Fluent
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="put_req">Putonghua</label>
                  </div>
                  <input type="text" id="put_req" style={{display: 'none'}} />
                  <div className="col-2">
                    <input type="radio" name="put_req" defaultValue={0} defaultChecked />Fair
                  </div>
                  <div className="col-2">
                    <input type="radio" name="put_req" defaultValue={1} />Fluent
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="disc_preferred">Disciplines of Student Preferred</label>
                  </div>
                  <div className="col-8">
                    <input type="text" className="form-control is-invalid" id="disc_preferred" defaultValue="IT student" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="other_req">Other Requirements</label>
                  </div>
                  <div className="col-8">
                    <input type="text" className="form-control is-invalid" id="other_req" defaultValue="N/A" required />
                  </div>
                </div>
                <h5>EIA Details</h5>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="start_date">Start Date</label>
                  </div>
                  <div className="col-8">
                    <input type="date" className="form-control is-invalid" id="start_date" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="finish_date">End Date</label>
                  </div>
                  <div className="col-8">
                    <input type="date" className="form-control is-invalid" id="finish_date" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="hr_per_day">Working Hour per Day</label>
                  </div>
                  <div className="col-8">
                    <input type="number" className="form-control is-invalid" id="hr_per_day" min={1} required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="day_per_week">Working Day per Week</label>
                  </div>
                  <div className="col-8">
                    <input type="number" className="form-control is-invalid" id="day_per_week" min={1} max={7} defaultValue={0} required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="working_hr_fr">Working Hour</label>
                  </div>
                  <div className="col-2"><input className="form-control is-invalid" type="time" id="working_hr_fr" required />
                  </div>
                  <div className="col-0.5">至</div>
                  <div className="col-2">
                    <input type="time" className="form-control is-invalid" id="working_hr_to" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="total_hour">Total working hour</label>
                  </div>
                  <div className="col-8">
                    <input type="number" className="form-control is-invalid" id="total_hour" min={90} defaultValue={90} required />
                  </div>
                  <div className="col-2">
                    Hour
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="shift_duty">Shift Duty</label>
                  </div>
                  <div className="col-8">
                    <input type="text" id="shift_duty" style={{display: 'none'}} />
                    <input type="radio" name="shift_duty" defaultValue="Yes" />Yes
                    <input type="radio" name="shift_duty" defaultValue="No" defaultChecked />No
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="allowance_per_mon">Allowance</label>
                  </div>
                  <div className="col-0.5">$</div>
                  <div className="col-2">
                    <input type="number" className="form-control is-invalid" id="allowance_per_mon" min={0} defaultValue={0} required />
                  </div>
                  <div className="col-1">
                    <span>per</span>
                  </div>
                  <div className="col-1">Hour<input type="radio" className="form_radio" name="11.1" id="11.1.1" /></div>
                  <div className="col-1">Day<input type="radio" className="form_radio" name="11.1" id="11.1.2" /></div>
                  <div className="col-1">Week<input type="radio" className="form_radio" name="11.1" id="11.1.3" defaultChecked /></div>
                  <div className="col-1">Month<input type="radio" className="form_radio" name="11.1" id="11.1.4" /></div>
                  <div className="col-1">Scheme<input type="radio" className="form_radio" name="11.1" id="11.1.5" /></div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="ia_property">At the end pay of</label>
                  </div>
                  <div className="col-1">
                    <input type="radio" className="form_radio" name="end_pay" id="ppday" defaultChecked />day</div>
                  <div className="col-1">
                    <input type="radio" className="form_radio" name="end_pay" id="ppweek" />week</div>
                  <div className="col-1 ">
                    <input type="radio" className="form_radio" name="end_pay" id="ppmonth" />month</div>
                  <div className="col-1 ">
                    <input type="radio" className="form_radio" name="end_pay" id="ppscheme" />scheme</div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="overtime_allowance">Overtime allowance</label>
                  </div>
                  <div className="col-0.5">$</div>
                  <div className="col-7">
                    <input type="number" className="form-control is-invalid" id="overtime_allowance" min={0} defaultValue={0} />
                  </div>
                  <div className="col-2">
                    <span className="option">[optional]</span>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="bonus">Bonus price</label>
                  </div>
                  <div className="col-0.5">$</div>
                  <div className="col-8">
                    <input type="number" className="form-control is-invalid" id="bonus" min={0} defaultValue={0} required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="ia_property">IA Property</label>
                  </div>
                  <input type="text" id="ia_property" style={{display: 'none'}} />
                  <div className="col-2">
                    <input type="radio" name="ia_property" defaultValue="regular" defaultChecked />on regular
                  </div>
                  <div className="col-2">
                    <input type="radio" name="ia_property" defaultValue="on request" />on request
                  </div>
                  <div className="col-2 ">
                    <input type="radio" name="ia_property" defaultValue="project basis" />on project basis
                  </div>
                </div>
                <br />
              </div>
            </div>
            <div className="part">
              <h4>Site visit (老作)</h4>
              <div className="error"><i className="fas fa-times" />&nbsp;&nbsp;<span className="count">0</span></div>
              <div className="inner">
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="time_len">Time length</label>
                  </div>
                  <div className="col-8">
                    <input type="number" className="form-control is-invalid" id="time_len" min={1} defaultValue={1} required />
                  </div>
                  <div className="col">
                    /Hour
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="work_done">Work summary</label>
                  </div>
                  <div className="col-8">
                    <input type="text" className="form-control is-invalid" id="work_done" required /></div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="g1">老作一句讚自己</label>
                  </div>
                  <div className="col-8">
                    <input type="text" className="form-control is-invalid" id="g1" required /></div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="g2">老作一句讚自己x2</label>
                  </div>
                  <div className="col-8">
                    <input type="text" className="form-control is-invalid" id="g2" required /></div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="g3">老作一句讚自己x3</label>
                  </div>
                  <div className="col-8">
                    <input type="text" className="form-control is-invalid" id="g3" required /></div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="b1">老作一句彈自己</label>
                  </div>
                  <div className="col-8">
                    <input type="text" className="form-control is-invalid" id="b1" required /></div>
                </div>
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="b2">老作一句彈自己x2</label>
                  </div>
                  <div className="col-8">
                    <input type="text" className="form-control is-invalid" id="b2" required />
                  </div>
                </div>
                <br />
                <h5>Long question</h5>
                <div className="form-row">
                  <div className="col-12">
                    Q1: How did your company mentor help you during the attachment
                  </div>
                  <div className="col-8">
                    <input type="text" className="form-control is-invalid" id="b5" required /></div>
                </div>
                <div className="form-row">
                  <div className="col-12">
                    Q2: Which part of the attachment scheme did you like most
                  </div>
                  <div className="col-8">
                    <input type="text" className="form-control is-invalid" id="b6" required /></div>
                </div>
                <div className="form-row">
                  <div className="col-12">
                    Q3: What aspects of the attachment scheme could be improved
                  </div>
                  <div className="col-8">
                    <input type="text" className="form-control is-invalid" id="b7" required /></div>
                </div>
                <div className="form-row">
                  <div className="col-12">
                    Q4: What was the most valuable experience you had in the attachment?
                  </div>
                  <div className="col-8">
                    <input type="text" className="form-control is-invalid" id="b9" required /></div>
                </div>
                <div className="form-row">
                  <div className="col-12">
                    Q5: What was the most difficult part of the attachment
                  </div>
                  <div className="col-8">
                    <input type="text" className="form-control is-invalid" id="b10" required /></div>
                </div>
                <div className="form-row">
                  <div className="col-12">
                    Q6: In your opinion, in what ways can this industrial attachment be improved
                  </div>
                  <div className="col-8">
                    <input type="text" className="form-control is-invalid" id="6b4" required /></div>
                </div>
                <div className="form-row">
                  <div className="col-12">
                    Q7: In your opinion, do you satisfy the student's performance?
                  </div>
                  <br />
                  <div className="col-2">Very Dissatisfied</div>
                  <div className="col"><input type="radio" className="form_radio" name="10.1" id="10.1.1" /></div>
                  <div className="col"><input type="radio" className="form_radio" name="10.1" id="10.1.2" /></div>
                  <div className="col"><input type="radio" className="form_radio" name="10.1" id="10.1.3" /></div>
                  <div className="col"><input type="radio" className="form_radio" name="10.1" id="10.1.4" /></div>
                  <div className="col"><input type="radio" className="form_radio" name="10.1" id="10.1.5" /></div>
                  <div className="col-2">Very Satisfied</div>
                </div>
                <div className="form-row">
                  <div className="col-1"><label htmlFor="10.1.6">Why:</label></div>
                  <div className="col-8">
                    <textarea className="form-control is-invalid form_textarea" id="10.1.6" rows={3} defaultValue={""} />
                  </div>
                  <br />
                </div>
              </div>
            </div>
            <div className="part">
              <h4>Questionnaire</h4>
              <div className="inner">
                <h5>Attachment Visit</h5>
                <div className="form-row">
                  <div className="col-1">
                    <input type="checkbox" className="form_checkbox" id="q1" />
                  </div>
                  <div className="col-8">
                    Orientation student has received on the job (safety issues, confidentiality, workplace
                    expectations, information about the Organization, etc.)
                  </div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-1">
                    <input type="checkbox" className="form_checkbox" id="q2" />
                  </div>
                  <div className="col-8">
                    Student’s performance (quality and quantity of work, attendance, punctuality, etc.)
                  </div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-1">
                    <input type="checkbox" className="form_checkbox" id="q3" />
                  </div>
                  <div className="col-8">
                    Personalized Learning Plan tasks (update as necessary)
                  </div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-1">
                    <input type="checkbox" className="form_checkbox" id="q4" />
                  </div>
                  <div className="col-8">
                    Student’s adjustment to the workplace (interpersonal relationships, boarding issues,
                    remuneration issues, work routines, etc.)
                  </div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-1">
                    <input type="checkbox" className="form_checkbox" id="q5" />
                  </div>
                  <div className="col-8">
                    Areas of concern and action to be taken ((student; mentor; Attachment Coordinator; other.)
                  </div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-1">
                    <input type="checkbox" className="form_checkbox" id="q6" />
                  </div>
                  <div className="col-8">
                    What is going well; feedback given (student; mentor.)
                  </div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-1">
                    <input type="checkbox" className="form_checkbox" id="q7" />
                  </div>
                  <div className="col-8">
                    Other issues: (refer to weekly reports, job logs, etc.)
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-1" />
                  <div className="col-8">
                    <textarea className="form-control is-invalid form_textarea" id="q7_other" rows={3} defaultValue={""} />
                  </div>
                </div>
                <br />
                <h5>Attachment Visit</h5>
                <div className="form-row">
                  <div className="col-2">Key Skills</div>
                  <div className="col-1">1</div>
                  <div className="col-1">2</div>
                  <div className="col-1">3</div>
                  <div className="col-1">4</div>
                  <div className="col-1">5</div>
                  <div className="col-1">6</div>
                  <div className="col-1">7</div>
                  <div className="col-1">8</div>
                  <div className="col-1">9</div>
                  <div className="col-1">10</div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-2">Chinese (verbal and written)</div>
                  <div className="col-1"><input type="radio" className="form_radio" name="1.1" id="1.1.1" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="1.1" id="1.1.2" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="1.1" id="1.1.3" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="1.1" id="1.1.4" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="1.1" id="1.1.5" defaultChecked /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="1.1" id="1.1.6" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="1.1" id="1.1.7" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="1.1" id="1.1.8" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="1.1" id="1.1.9" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="1.1" id="1.1.10" /></div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-2">English (verbal and written)</div>
                  <div className="col-1"><input type="radio" className="form_radio" name="1.2" id="1.2.1" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="1.2" id="1.2.2" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="1.2" id="1.2.3" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="1.2" id="1.2.4" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="1.2" id="1.2.5" defaultChecked /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="1.2" id="1.2.6" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="1.2" id="1.2.7" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="1.2" id="1.2.8" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="1.2" id="1.2.9" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="1.2" id="1.2.10" /></div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-2">PC Hardware installation</div>
                  <div className="col-1"><input type="radio" className="form_radio" name="2.1" id="2.1.1" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="2.1" id="2.1.2" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="2.1" id="2.1.3" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="2.1" id="2.1.4" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="2.1" id="2.1.5" defaultChecked /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="2.1" id="2.1.6" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="2.1" id="2.1.7" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="2.1" id="2.1.8" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="2.1" id="2.1.9" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="2.1" id="2.1.10" /></div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-2">Software installation</div>
                  <div className="col-1"><input type="radio" className="form_radio" name="2.2" id="2.2.1" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="2.2" id="2.2.2" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="2.2" id="2.2.3" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="2.2" id="2.2.4" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="2.2" id="2.2.5" defaultChecked /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="2.2" id="2.2.6" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="2.2" id="2.2.7" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="2.2" id="2.2.8" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="2.2" id="2.2.9" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="2.2" id="2.2.10" /></div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-2">Use of ICT software</div>
                  <div className="col-1"><input type="radio" className="form_radio" name="2.3" id="2.3.1" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="2.3" id="2.3.2" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="2.3" id="2.3.3" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="2.3" id="2.3.4" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="2.3" id="2.3.5" defaultChecked /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="2.3" id="2.3.6" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="2.3" id="2.3.7" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="2.3" id="2.3.8" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="2.3" id="2.3.9" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="2.3" id="2.3.10" /></div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-2">Other Specific Skills<br /><input type="textarea" className="col-10" id="other_skill" />
                  </div>
                  <div className="col-1"><input type="radio" className="form_radio" name="2.4" id="2.4.2" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="2.4" id="2.4.3" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="2.4" id="2.4.1" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="2.4" id="2.4.4" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="2.4" id="2.4.5" defaultChecked /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="2.4" id="2.4.6" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="2.4" id="2.4.7" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="2.4" id="2.4.8" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="2.4" id="2.4.9" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="2.4" id="2.4.10" /></div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-2">Trade Skills</div>
                  <div className="col-1"><input type="radio" className="form_radio" name="3.1" id="3.1.1" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="3.1" id="3.1.2" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="3.1" id="3.1.3" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="3.1" id="3.1.4" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="3.1" id="3.1.5" defaultChecked /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="3.1" id="3.1.6" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="3.1" id="3.1.7" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="3.1" id="3.1.8" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="3.1" id="3.1.9" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="3.1" id="3.1.10" /></div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-2">Utilization of appropriate resources</div>
                  <div className="col-1"><input type="radio" className="form_radio" name={4} id="4.1" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name={4} id="4.2" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name={4} id="4.3" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name={4} id="4.4" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name={4} id="4.5" defaultChecked /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name={4} id="4.6" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name={4} id="4.7" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name={4} id="4.8" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name={4} id="4.9" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name={4} id="4.10" /></div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-2">Work prioritization</div>
                  <div className="col-1"><input type="radio" className="form_radio" name="5.1" id="5.1.1" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="5.1" id="5.1.2" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="5.1" id="5.1.3" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="5.1" id="5.1.4" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="5.1" id="5.1.5" defaultChecked /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="5.1" id="5.1.6" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="5.1" id="5.1.7" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="5.1" id="5.1.8" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="5.1" id="5.1.9" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="5.1" id="5.1.10" /></div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-2">Work organization</div>
                  <div className="col-1"><input type="radio" className="form_radio" name="5.2" id="5.2.1" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="5.2" id="5.2.2" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="5.2" id="5.2.3" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="5.2" id="5.2.4" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="5.2" id="5.2.5" defaultChecked /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="5.2" id="5.2.6" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="5.2" id="5.2.7" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="5.2" id="5.2.8" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="5.2" id="5.2.9" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="5.2" id="5.2.10" /></div>
                  <br /></div>
                <div className="form-row">
                  <div className="col-2">Ability to work independently</div>
                  <div className="col-1"><input type="radio" className="form_radio" name="5.3" id="5.3.1" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="5.3" id="5.3.2" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="5.3" id="5.3.3" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="5.3" id="5.3.4" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="5.3" id="5.3.5" defaultChecked /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="5.3" id="5.3.6" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="5.3" id="5.3.7" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="5.3" id="5.3.8" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="5.3" id="5.3.9" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="5.3" id="5.3.10" /></div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-2">Appropriate use of teamwork (division of responsibilities and cooperation)</div>
                  <div className="col-1"><input type="radio" className="form_radio" name="6.1" id="6.1.1" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="6.1" id="6.1.2" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="6.1" id="6.1.3" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="6.1" id="6.1.4" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="6.1" id="6.1.5" defaultChecked /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="6.1" id="6.1.6" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="6.1" id="6.1.7" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="6.1" id="6.1.8" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="6.1" id="6.1.9" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="6.1" id="6.1.10" /></div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-2">Maintaining a harmonious team spirit</div>
                  <div className="col-1"><input type="radio" className="form_radio" name="6.2" id="6.2.1" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="6.2" id="6.2.2" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="6.2" id="6.2.3" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="6.2" id="6.2.4" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="6.2" id="6.2.5" defaultChecked /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="6.2" id="6.2.6" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="6.2" id="6.2.7" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="6.2" id="6.2.8" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="6.2" id="6.2.9" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="6.2" id="6.2.10" /></div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-2">Other Skills</div>
                  <div className="col-1"><input type="radio" className="form_radio" name="7.1" id="7.1.1" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="7.1" id="7.1.2" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="7.1" id="7.1.3" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="7.1" id="7.1.4" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="7.1" id="7.1.5" defaultChecked /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="7.1" id="7.1.6" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="7.1" id="7.1.7" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="7.1" id="7.1.8" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="7.1" id="7.1.9" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="7.1" id="7.1.10" /></div>
                </div>
                <br />
                <h5>Student’s Evaluation of Industrial Attachment</h5>
                <div className="form-row">
                  <div className="col-2">1:Strongly disagree 10:Strongly agree</div>
                  <div className="col-1">1</div>
                  <div className="col-1">2</div>
                  <div className="col-1">3</div>
                  <div className="col-1">4</div>
                  <div className="col-1">5</div>
                  <div className="col-1">6</div>
                  <div className="col-1">7</div>
                  <div className="col-1">8</div>
                  <div className="col-1">9</div>
                  <div className="col-1">10</div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-2">The attachment met my expectation</div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.1" id="4.1.1" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.1" id="4.1.2" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.1" id="4.1.3" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.1" id="4.1.4" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.1" id="4.1.5" defaultChecked /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.1" id="4.1.6" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.1" id="4.1.7" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.1" id="4.1.8" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.1" id="4.1.9" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.1" id="4.1.10" /></div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-2">Your teaching department provided you with adequate support</div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.2" id="4.2.1" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.2" id="4.2.2" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.2" id="4.2.3" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.2" id="4.2.4" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.2" id="4.2.5" defaultChecked /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.2" id="4.2.6" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.2" id="4.2.7" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.2" id="4.2.8" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.2" id="4.2.9" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.2" id="4.2.10" /></div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-2">Your received adequate support from the attached company</div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.3" id="4.3.1" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.3" id="4.3.2" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.3" id="4.3.3" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.3" id="4.3.4" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.3" id="4.3.5" defaultChecked /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.3" id="4.3.6" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.3" id="4.3.7" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.3" id="4.3.8" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.3" id="4.3.9" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.3" id="4.3.10" /></div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-2">The attachment is very useful</div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.4" id="4.4.1" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.4" id="4.4.2" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.4" id="4.4.3" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.4" id="4.4.4" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.4" id="4.4.5" defaultChecked /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.4" id="4.4.6" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.4" id="4.4.7" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.4" id="4.4.8" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.4" id="4.4.9" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.4" id="4.4.10" /></div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-2">The duration of the attachment is appropriate</div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.5" id="4.5.1" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.5" id="4.5.2" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.5" id="4.5.3" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.5" id="4.5.4" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.5" id="4.5.5" defaultChecked /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.5" id="4.5.6" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.5" id="4.5.7" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.5" id="4.5.8" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.5" id="4.5.9" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.5" id="4.5.10" /></div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-2">The pre-attachment preparation sessions are useful
                  </div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.6" id="4.6.1" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.6" id="4.6.2" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.6" id="4.6.3" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.6" id="4.6.4" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.6" id="4.6.5" defaultChecked /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.6" id="4.6.6" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.6" id="4.6.7" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.6" id="4.6.8" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.6" id="4.6.9" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="4.6" id="4.6.10" /></div>
                </div>
                <br />
                <h5>Self-evaluation by Student</h5>
                <br />
                <div className="form-row">
                  <div className="col-2">1:No improvement 10:Great improvement</div>
                  <div className="col-1">1</div>
                  <div className="col-1">2</div>
                  <div className="col-1">3</div>
                  <div className="col-1">4</div>
                  <div className="col-1">5</div>
                  <div className="col-1">6</div>
                  <div className="col-1">7</div>
                  <div className="col-1">8</div>
                  <div className="col-1">9</div>
                  <div className="col-1">10</div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-2">Communication skills</div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.1" id="8.1.1" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.1" id="8.1.2" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.1" id="8.1.3" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.1" id="8.1.4" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.1" id="8.1.5" defaultChecked /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.1" id="8.1.6" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.1" id="8.1.7" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.1" id="8.1.8" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.1" id="8.1.9" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.1" id="8.1.10" /></div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-2">Managing information</div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.2" id="8.2.1" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.2" id="8.2.2" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.2" id="8.2.3" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.2" id="8.2.4" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.2" id="8.2.5" defaultChecked /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.2" id="8.2.6" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.2" id="8.2.7" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.2" id="8.2.8" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.2" id="8.2.9" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.2" id="8.2.10" /></div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-2">Using numbers</div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.3" id="8.3.1" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.3" id="8.3.2" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.3" id="8.3.3" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.3" id="8.3.4" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.3" id="8.3.5" defaultChecked /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.3" id="8.3.6" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.3" id="8.3.7" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.3" id="8.3.8" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.3" id="8.3.9" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.3" id="8.3.10" /></div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-2">Thinking and solving problems</div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.4" id="8.4.1" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.4" id="8.4.2" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.4" id="8.4.3" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.4" id="8.4.4" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.4" id="8.4.5" defaultChecked /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.4" id="8.4.6" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.4" id="8.4.7" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.4" id="8.4.8" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.4" id="8.4.9" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.4" id="8.4.10" /></div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-2">Demonstrate positive attitudes and behavior</div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.5" id="8.5.1" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.5" id="8.5.2" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.5" id="8.5.3" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.5" id="8.5.4" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.5" id="8.5.5" defaultChecked /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.5" id="8.5.6" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.5" id="8.5.7" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.5" id="8.5.8" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.5" id="8.5.9" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.5" id="8.5.10" /></div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-2">Be responsible
                  </div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.6" id="8.6.1" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.6" id="8.6.2" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.6" id="8.6.3" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.6" id="8.6.4" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.6" id="8.6.5" defaultChecked /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.6" id="8.6.6" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.6" id="8.6.7" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.6" id="8.6.8" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.6" id="8.6.9" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.6" id="8.6.10" /></div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-2">Be adaptable</div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.7" id="8.7.1" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.7" id="8.7.2" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.7" id="8.7.3" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.7" id="8.7.4" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.7" id="8.7.5" defaultChecked /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.7" id="8.7.6" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.7" id="8.7.7" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.7" id="8.7.8" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.7" id="8.7.9" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.7" id="8.7.10" /></div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-2">Learn continuously</div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.8" id="8.8.1" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.8" id="8.8.2" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.8" id="8.8.3" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.8" id="8.8.4" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.8" id="8.8.5" defaultChecked /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.8" id="8.8.6" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.8" id="8.8.7" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.8" id="8.8.8" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.8" id="8.8.9" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.8" id="8.8.10" /></div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-2">Work Safely</div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.9" id="8.9.1" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.9" id="8.9.2" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.9" id="8.9.3" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.9" id="8.9.4" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.9" id="8.9.5" defaultChecked /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.9" id="8.9.6" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.9" id="8.9.7" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.9" id="8.9.8" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.9" id="8.9.9" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.9" id="8.9.10" /></div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-2">Work with others</div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.10" id="8.10.1" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.10" id="8.10.2" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.10" id="8.10.3" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.10" id="8.10.4" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.10" id="8.10.5" defaultChecked /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.10" id="8.10.6" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.10" id="8.10.7" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.10" id="8.10.8" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.10" id="8.10.9" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.10" id="8.10.10" /></div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-2">Participate in projects and tasks</div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.11" id="8.11.1" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.11" id="8.11.2" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.11" id="8.11.3" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.11" id="8.11.4" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.11" id="8.11.5" defaultChecked /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.11" id="8.11.6" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.11" id="8.11.7" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.11" id="8.11.8" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.11" id="8.11.9" /></div>
                  <div className="col-1"><input type="radio" className="form_radio" name="8.11" id="8.11.10" /></div>
                </div>
              </div>
            </div>
            <br />
            <div className="part">
              <h4>Evaluation for Student’s Performance on Latest Technology (Workplace Supervisor)</h4>
              <div className="error"><i className="fas fa-times" /><span className="count">0</span></div>
              <div className="inner">
                <h5>Does this industrial attachment improve student’s advance technical skills and benefit your
                  company/department?</h5><br />
                <div className="form-row">
                  <div className="col-1">
                    <input type="checkbox" className="form_checkbox" id="9.2.1" />
                  </div>
                  <div className="col-8">
                    Data Analytics
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-1">
                    <input type="checkbox" className="form_checkbox" id="9.2.2" />
                  </div>
                  <div className="col-8">
                    AI / Machine Learning AI
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-1">
                    <input type="checkbox" className="form_checkbox" id="9.2.3" />
                  </div>
                  <div className="col-8">
                    Cloud Computing
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-1">
                    <input type="checkbox" className="form_checkbox" id="9.2.4" />
                  </div>
                  <div className="col-8">
                    Smart/Intelligence Applications
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-1">
                    <input type="checkbox" className="form_checkbox" id="9.2.5" />
                  </div>
                  <div className="col-8">
                    Immersive and Digital Media Technologies
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-1">
                    <input type="checkbox" className="form_checkbox" id="9.2.6" />
                  </div>
                  <div className="col-8">
                    Cybersecurity
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-1">
                    <input type="checkbox" className="form_checkbox" id="9.2.7" />
                  </div>
                  <div className="col-8">
                    Financial Technology
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-1">
                    <input type="checkbox" className="form_checkbox" id="9.2.8" />
                  </div>
                  <div className="col-8">
                    Other
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-1" />
                  <div className="col-8">
                    <textarea className="form-control is-invalid form_textarea" id="9.2.8_other" rows={3} defaultValue={""} />
                  </div>
                </div>
                <br />
                <h5>Benefit to Company/Department</h5><br />
                <div className="form-row">
                  <div className="col-1">
                    <input type="checkbox" className="form_checkbox" id="9.3.1" />
                  </div>
                  <div className="col-8">
                    Injection of new ideas in the workplace
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-1">
                    <input type="checkbox" className="form_checkbox" id="9.3.2" />
                  </div>
                  <div className="col-8">
                    Engaging a pool of work-ready recruits
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-1">
                    <input type="checkbox" className="form_checkbox" id="9.3.3" />
                  </div>
                  <div className="col-8">
                    A deeper understanding of young employee
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-1">
                    <input type="checkbox" className="form_checkbox" id="9.3.4" />
                  </div>
                  <div className="col-8">
                    Having dedicated resource to complete a specific task
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-1">
                    <input type="checkbox" className="form_checkbox" id="9.3.5" />
                  </div>
                  <div className="col-8">
                    Other
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-1" />
                  <div className="col-8">
                    <textarea className="form-control is-invalid form_textarea" id="9.3.5_other" rows={3} defaultValue={""} />
                  </div>
                </div>
                <h5>Will you recommend the student to your Organization for full-employment</h5><br />
                <div className="form-row">
                  <div className="col-1">
                    <input type="radio" className="form_radio" name="9.4" id="9.4.1" />
                  </div>
                  <div className="col-8">
                    Yes
                  </div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-1">
                    <input type="radio" className="form_radio" name="9.4" id="9.4.2" />
                  </div>
                  <div className="col-8">
                    Not in this period of time due to staffing/budgetary constraint. But, will highly recommend the
                    student to enter the relevant profession/industry immediately after graduation.
                  </div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-1">
                    <input type="radio" className="form_radio" name="9.4" id="9.4.3" />
                  </div>
                  <div className="col-0.5">
                    <span className="name_language">No, because</span>
                  </div>
                  <div className="col-8">
                    <input className="form-control is-invalid" type="text" id="9.4.3_reason" />
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="part">
              <h4>Summary of Problem-based Industrial Project (Student/Academic Supervisor)</h4>
              <div className="error"><i className="fas fa-times" />&nbsp;&nbsp;<span className="count">0</span></div>
              <div className="inner">
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="project_title">Project Title</label>
                  </div>
                  <div className="col-8">
                    <input type="text" id="project_title" className="form-control is-invalid" required />
                  </div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="abstract">Abstract</label>
                  </div>
                  <div className="col-8">
                    <textarea className="form-control is-invalid form_textarea" id="abstract" rows={3} defaultValue={""} />
                  </div>
                </div>
              </div>
            </div>
            <div className="part">
              <h4>One-year Employment Record (Academic Supervisor)</h4>
              <div className="error"><i className="fas fa-times" />&nbsp;&nbsp;<span className="count">0</span></div>
              <div className="inner">
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="10.1">One month after completion of year 2 study (i.e. June)</label>
                  </div>
                  <div className="col-8">
                    <textarea className="form-control is-invalid form_textarea" id="10.1" rows={3} defaultValue={""} />
                  </div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="10.2">Six months after completion of year 2 study (i.e. December)</label>
                  </div>
                  <div className="col-8">
                    <textarea className="form-control is-invalid form_textarea" id="10.2" rows={3} defaultValue={""} />
                  </div>
                </div>
                <br />
                <div className="form-row">
                  <div className="col-2">
                    <label htmlFor="10.3">One year after completion of year 2 study (i.e. June of next year)</label>
                  </div>
                  <div className="col-8">
                    <textarea className="form-control is-invalid form_textarea" id="10.3" rows={3} defaultValue={""} />
                  </div>
                </div>
              </div>
            </div>
            <input type="button" className="saveasjson" defaultValue="Save as JSON" onclick="saveAsJson()" />
            <input type="submit" className="gen" defaultValue="Generate IA Doc" />
          </form>
        </div>
      </div>
      );
  }
}

export default withAuthenticator(App, true);


/* componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src = "./javascript/FileSaver.js";
    //For head
    document.head.appendChild(script);

    // For body
    document.body.appendChild(script);
  }
*/