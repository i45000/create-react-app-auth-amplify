import React , { Component } from 'react';

import Amplify from 'aws-amplify';

// @flow strict

import classNames from 'classnames'

import { isIOS } from 'react-device-detect'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'

import faviconDark from './assets/favicon-dark.ico'
import favicon from './assets/favicon.ico'
import { Container } from './Components/Container'
import { Footer } from './Components/Footer'
import { GoToTop } from './Components/GoToTop'
import { Header } from './Components/Header'
import { Instruction } from './Components/Instruction'
import { IosWarning } from './Components/IosWarning'
import { Warning }  from './Components/Warning'
import { isDarkThemeSelector } from './redux/ui/selectors'
import { FormBody } from './Containers/FormBody'
import { ImportExport } from './Containers/ImportExport'
import { ToolBar } from './Containers/ToolBar'
import './Containers/App/index.css'

import aws_exports from './aws-exports';

import { withAuthenticator } from 'aws-amplify-react';

Amplify.configure(aws_exports);


class App extends Component {
  render() {
    const { isDarkTheme }: { isDarkTheme: boolean } = this.props;
    return (
      <React.Fragment>
      <Helmet>
      <link rel='shortcut icon' href={isDarkTheme ? faviconDark : favicon} />
    </Helmet>
      <div  className="wrapper">
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
  }
}



export default withAuthenticator(App, true);

