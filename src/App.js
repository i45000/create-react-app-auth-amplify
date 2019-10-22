import React, { Component } from 'react';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
          <div class="header">
        <h1>IVE IA Document Generator</h1>
        <a class="credit">All credit goes to: Mark Lai IT114115/2B 2017-2018 Wan Ka Chi IT114115/2A 2019-2020 Wong Hok
            Leung IT114115/2A 2019-2020</a>
    </div>
    <div class="part">
        <h4>Instruction</h4>
        <div class="inner">
            <div class="warning">[ ! Important ! ]</div>
            If you are running at local machine, make sure you see the following message on chrome :
            <div class="warning-box">You are using a unsupported command-line flag: --disable-web-security</div>
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
    <div class="part">
        <h4>Read existing JSON file</h4>
        <div class="inner">
            <input type="file" id="fileToLoad" />
            <button onclick="loadJSON()">Load JSON</button>
        </div>
    </div>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
