// @flow strict

import classNames from 'classnames'
import React from 'react'
import { connect } from 'react-redux'

import { Container } from '../../Components/Container'
import { formSelector } from '../../redux/form/selectors'
import { isImportExportCollapsedSelector } from '../../redux/ui/selectors'
import { Export } from './Export'
import { Import } from './Import'
import classes from './index.css'

type Props = {
  form: Object,
  isCollapsed: boolean,
  isDarkTheme: boolean
}

const ImportExport = (props: Props) => (
  <div
    className={classNames(classes.container, {
      [classes.collapsed]: props.isCollapsed,
      [classes.dark]: props.isDarkTheme
    })}
  >
    <Container>
      <div className="column">
        <div className="columnWrapper">
          <span className="title">Import</span>
          <Import isDarkTheme={props.isDarkTheme} />
        </div>
      </div>
      <div className="column">
        <div className="columnWrapper">
          <span className="title">Export</span>
          <Export formData={props.form} isDarkTheme={props.isDarkTheme} />
        </div>
      </div>
    </Container>
  </div>
)

const mapStateToProps = state => ({
  form: formSelector(state),
  isCollapsed: isImportExportCollapsedSelector(state)
})

export default connect(mapStateToProps)(ImportExport)
