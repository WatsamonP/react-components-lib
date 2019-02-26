import React from 'react'
import styled from 'styled-components'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import { translate } from 'react-i18next';

import Auth from './Auth'
import Header from './Header'

import { JoyTheme } from '../../Style/JoyTheme'
import SidebarStyle from './Styles/Sidebar'
import MenuStyle from './Styles/Menu'
import RouterLink from './RouterLink';

const MySidenav = styled.div`
  ${SidebarStyle}
  ${props => props.isOpen ? 'width:0px' : 'width:200px'};
  background-color: ${JoyTheme.LIGHT};
`
const Menu = styled(NavLink)`
  ${MenuStyle}
`
const Main = styled.div`
  position: relative;
  margin-left: ${props => props.isOpen ? `0px` : '200px'};
  transition: 0.5s;
  padding-top: 40px;
`

class Form extends React.Component {

  state = { isOpen: true }

  handleClick = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }

  render() {
    const { i18n } = this.props
    return (
      <div>
        <MySidenav isOpen={this.state.isOpen}>
          <Auth />
          {
            RouterLink.map(link =>
              link.display === true &&
              <Menu to={link.path} key={`key-${link.path}`}>
                {link.icon} {i18n.t(link.title)}
              </Menu>)
          }
        </MySidenav>

        <Header handleClickToggle={this.handleClick} isOpen={this.state.isOpen} />

        <Main isOpen={this.state.isOpen}>
          <Switch>
            <Redirect exact strict from="/" to="/appList" />

            {
              RouterLink.map(link =>
              <Route key={`key-${link.path}`} path={link.path} component={link.component}  />)
            }
          </Switch>
        </Main>
      </div>
    )
  }
}

export default translate()(Form);
