import React, { Component } from 'react';
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
    <meta charset="UTF-8" />
    <title>IVE IA Document Generator</title>
    <link href="https://fonts.googleapis.com/css?family=Rajdhani" rel="stylesheet" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
    <link rel="stylesheet" type="text/css" href="style.css" />
    <script type="text/javascript" src="./javascript/FileSaver.js"></script>
    <script type="text/javascript" src="./javascript/jszip.js"></script>
    <script type="text/javascript" src="./javascript/jszip-utils.js"></script>
    <script type="text/javascript" src="./javascript/docxtemplater-latest.js"></script>
    <script type="text/javascript" src="./javascript/main.js"></script>
    <script defer src="https://use.fontawesome.com/releases/v5.0.10/js/all.js"
            integrity="sha384-slN8GvtUJGnv6ca26v8EzVaR9DC58QEwsIk9q1QXdCU8Yu8ck/tL/5szYlBbqmS+"
            crossorigin="anonymous"></script>
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
  reder() {
    return (
        <div className="part1">
            <h4>Read existing JSON file</h4>
            <div className="inner">
                <input type="file" id="fileToLoad" />
                <button onclick="loadJSON()">Load JSON</button>
            </div>
        </div>
        );
  }    
}
export default withAuthenticator(App, true);
