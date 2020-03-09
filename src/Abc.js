// import ApppendingLoadJSON  from './Abc';
// import { Header } from './Components/Header';
import classNames from 'classnames'

import React, { Component } from 'react';

import { isIOS } from 'react-device-detect'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
//import {App} from './Containers/App'
//import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import faviconDark from './assets/favicon-dark.ico'
import favicon from './assets/favicon.ico'
import { Container } from './Components/Container'
import { Footer } from './Components/Footer'
import GoToTop from './Components/GoToTop'
import  Header  from './Components/Header'
import { Instruction } from './Components/Instruction'
import { IosWarning } from './Components/IosWarning'
import {Warning}  from './Components/Warning'
import { isDarkThemeSelector } from './redux/ui/selectors'
import { FormBody } from './Containers/FormBody'
import { ImportExport } from './Containers/ImportExport'
import { ToolBar } from './Containers/ToolBar'
import classes from './index.css'



import { rootReducer } from './redux'
import { createStore } from './utils/createStore'

// import 'https://project-180288263.s3-ap-southeast-1.amazonaws.com/main.js';
// import './javascript/jszip.js';
// import './javascript/jszip-utils.js';
// import './javascript/docxtemplater-latest.js';
// import loadJSON from './javascript/main.js'

import './css/style2.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);





const App = ({ isDarkTheme }: { isDarkTheme: boolean }) => (
  <React.Fragment>
    <Helmet>
      <link rel='shortcut icon' href={isDarkTheme ? faviconDark : favicon} />
    </Helmet>
    <div
      
   
      className={classNames(classes.wrapper, { [classes.dark]: isDarkTheme })}
    >
      {isIOS ? <IosWarning /> : null}
      <Header isDarkTheme={isDarkTheme} />
      <ToolBar isDarkTheme={isDarkTheme} />
      <ImportExport isDarkTheme={isDarkTheme} />
      <Container>
        <Instruction />
        <Warning />
        <FormBody />
      </Container>
      <Footer isDarkTheme={isDarkTheme} />
      <GoToTop isDarkTheme={isDarkTheme} />
    </div>
  </React.Fragment>
)

const mapStateToProps = state => ({
  isDarkTheme: isDarkThemeSelector(state)
})

export default connect(mapStateToProps)(App)