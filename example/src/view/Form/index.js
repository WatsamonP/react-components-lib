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
  width: ${props => props.isOpen ? `0px` : '200px'};
  background-color: ${JoyTheme.LIGHT};
`
const Menu = styled(NavLink)`
  ${MenuStyle};
`
const Container = styled.div`
  margin-left: ${props => props.isOpen ? `0px` : '200px'};
  transition: 0.5s;
  position: fixed;
  height: 100%;
  width: 100%;
  overflow-y: hidden;
  left:0px;
`

const Main = styled.div`
  top: 40px;
  position: relative;
  height: 100%;
  width: 100%;
  overflow-y: auto;
`

class Form extends React.Component {

  state = { isOpen: true }

  handleClick = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }

  render() {
    const { isOpen } = this.state
    const { i18n } = this.props
    return (
      <div>
        <MySidenav isOpen={isOpen}>
          <Auth />
          {RouterLink.map(link =>
            link.display === true &&
            <Menu to={link.path} key={`key-${link.path}`} onClick={this.handleClick}>
              {link.icon} {i18n.t(link.title)}
            </Menu>)}
        </MySidenav>

        <Header handleClickToggle={this.handleClick} isOpen={isOpen} />
        <Container isOpen={isOpen}>
          <Main>
            <Switch>
              <Redirect exact strict from="/" to="/appList" />
              {
                RouterLink.map(link =>
                  <Route key={`key-${link.path}`} path={link.path} component={link.component} />)
              }
            </Switch>
          </Main>
        </Container>
      </div>
    )
  }
}

export default translate()(Form);
