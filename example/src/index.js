import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './App'
import reducers from './reducers'
import './i18n';

// เอาไว้ใช้กับ ReduxDevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// store เก็บ state / 1 app - 1 store
// เข้าถึงข้อมูล getState(),  update state -> dispatch
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)))

// Provider -- จะได้เข้าถึงค่าใน store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
)

module.hot.accept();




