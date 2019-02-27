import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../actions';
import styled from 'styled-components'
import { translate } from 'react-i18next';

import MenuStyle from './Styles/Menu'
import { JoyTheme } from '../../Style/JoyTheme'
import { FaSignOut, FaUser } from '../../components/Icon'
const AuthButton = styled.div`
  ${MenuStyle}
  background-color: ${JoyTheme.NAVY};
  color: ${JoyTheme.WHITE};
  border-bottom: none;
  cursor: pointer;
`
class Auth extends React.Component {

  handleClick = () => {
    this.props.isSignedIn ? this.props.signOut() : this.props.signIn('JoyWatsamon');
  }

  render() {
    const { isSignedIn, userId, i18n } = this.props;
    return (
      <React.Fragment>
        <AuthButton onClick={this.handleClick}>
          {FaUser}
          {isSignedIn ? ` ${userId}  ` : ` ${i18n.t('sign-in')}`}
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

export default connect(mapStateToProps, mapDispatchToProps)(translate()(Auth));