import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../actions';
import styled from 'styled-components'

import MenuStyle from './Styles/Menu'
import { JoyTheme } from '../../Style/JoyTheme'

const FaSignOut = <i className="fa fa-sign-out" aria-hidden="true"></i>
const FaUser = <i className="fa fa-user" aria-hidden="true"></i>
const AuthButton = styled.div`
  ${MenuStyle}
  background-color: ${JoyTheme.NAVY};
  color: ${JoyTheme.WHITE};
  border-bottom: none;
  cursor: pointer;
`
class Auth extends React.Component {

  handleClick = () => {
    this.props.isSignedIn ? this.props.signOut() : this.props.signIn('Joy, Watsamon');
  }

  render() {
    const { isSignedIn, userId } = this.props;
    return (
      <React.Fragment>
        <AuthButton onClick={this.handleClick}>
          {FaUser}
          {isSignedIn ? ` ${userId}  ` : ' SIGN IN'}
          {isSignedIn ? FaSignOut : ''}
        </AuthButton>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  const { isSignedIn, userId } = state.auth;

  return { isSignedIn, userId }
}

const mapDispatchToProps = dispatch => {
  return {
    signIn: (userId) => { dispatch(signIn(userId)) },
    signOut: () => { dispatch(signOut) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);