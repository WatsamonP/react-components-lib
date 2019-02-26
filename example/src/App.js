import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Router } from 'react-router-dom';
import { Font } from './Style/JoyTheme'
import history from './history'
import Form from './view/Form'

const GlobalStyle = createGlobalStyle`
  * { font-family: ${Font.DEFAULT}; }
`

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Router history={history}>
          <Form />
        </Router>
      </React.Fragment>
    )
  }
}

export default App