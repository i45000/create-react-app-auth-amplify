// @flow strict

import classNames from 'classnames'
import React from 'react'
import ReactJson from 'react-json-view'

import { ExportToClipboard } from '../ExportToClipboard'
import { ExportToJson } from '../ExportToJson'
import './index.css'

type Props = {
  formData: Object,
  isDarkTheme: boolean
}

export const Export = ({ formData, isDarkTheme }: Props) => (
  <React.Fragment>
    <div className='jsonToolbar'>
      <ExportToJson formData={formData} />
      <ExportToClipboard formData={formData} />
    </div>
    <div className='jsonContent'>
      <ReactJson
        src={formData}
        enableClipboard={false}
        displayDataTypes={false}
        name='form'
        theme={isDarkTheme ? 'ashes' : 'rjv-default'}
      />
    </div>
  </React.Fragment>
)
