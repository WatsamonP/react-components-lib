import React from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom';
import { JoyTheme } from '../../Style/JoyTheme'
import { translate } from 'react-i18next';

const Wraning = <i className="fa fa-exclamation-triangle" style={{ color: JoyTheme.GREY, fontSize: '150px' }} aria-hidden="true"></i>

const Wrapper = styled.div`
  padding-top: 50px;
  text-align: center;
`
const Text = styled.div`
  padding-bottom: 15px;
  color: ${props => props.color || ''};
  display: block;
  font-size: ${props => props.font || '35px'};
`

class PageNotFound extends React.Component {

  state = { interval: null, dots: '' }

  tick() {
    this.setState(prevState => ({
      dots: prevState.dots + '.'
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { i18n } = this.props
    return (
      <Wrapper>
        {this.state.dots === '....' && <Redirect to={'/appList'} />}
        {Wraning}<br />
        <Text>{i18n.t("oops-error")}</Text>
        <Text color={JoyTheme.NAVY}>{i18n.t("page-not-found")}</Text>
        <Text font="25px">{i18n.t("loading-to-list")} {this.state.dots}</Text>
      </Wrapper >
    )
  }
}

export default translate()(PageNotFound)