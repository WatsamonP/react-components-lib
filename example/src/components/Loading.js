import React from 'react'
import { Redirect } from "react-router-dom";
import '../Style/Loading.css'

class Loading extends React.Component {

  state = { isTimeOut: false, timeout: null }

  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.setState({ isTimeOut: true })
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    return (
      <div>
        {this.state.isTimeOut && <Redirect to={'/appList'} />}
        <div id="cover-spin"></div>
      </div>
    )
  }
}

export default Loading;

