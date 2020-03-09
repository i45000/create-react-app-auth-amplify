import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import  App   from './App'
import { rootReducer } from './redux'
import { createStore } from './utils/createStore'

import * as serviceWorker from './serviceWorker';

import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

const store = createStore({ rootReducer })
const persistor = persistStore(store)

const root = document.getElementById('root')

if (root) {
  render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
    root
  )
}



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();



