import React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { translate } from 'react-i18next';

import { ButtonComponent } from 'react-components-lib'
import { JoyTheme } from '../../Style/JoyTheme'
import TitleStyle from '../../Style/Wrapper/Title'
import ButtonStyle from '../../Style/ButtonStyle'
import List from './List'

const Title = styled.div`${TitleStyle}`
const CreateBtn = styled(ButtonComponent)`
  ${ButtonStyle}
`

class AppList extends React.Component {

  render() {
    const { data, i18n } = this.props;
    return (
      <div>
        <Title>
          <div className="left">{i18n.t('app')}</div>
          <div className="right">
            <Link to='/AppCreate' style={{ textDecoration: 'none', color: JoyTheme.WHITE }}>
              <CreateBtn label={i18n.t('create-app')} />
            </Link>
          </div>
        </Title>
        <List list={data} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { data } = state;

  return {
    data: { ...data },
  }
}

export default connect(mapStateToProps, null)(translate()(AppList));

