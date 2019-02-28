import React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { translate } from 'react-i18next';

import { ButtonComponent } from 'react-components-lib'
import { JoyTheme } from '../../Style/JoyTheme'
import { Title } from '../../components/Wrapper'
import ButtonStyle from '../../Style/ButtonStyle'
import List from './List'

const CreateBtn = styled(ButtonComponent)`
  ${ButtonStyle}
`

class AppList extends React.Component {

  render() {
    const { data, i18n } = this.props;
    return (
      <div>
        <Title>
          <h1 className="left">{i18n.t('app')}</h1>
          <h1 className="right">
            <Link to='/appCreate' style={{ textDecoration: 'none', color: JoyTheme.WHITE }}>
              <CreateBtn label={i18n.t('create-app')} />
            </Link>
          </h1>
        </Title>
        <List list={data} />
      </div>
    )
  }
}

const mapStateToProps = ({ data }) => ({ data })

export default connect(mapStateToProps, null)(translate()(AppList));

