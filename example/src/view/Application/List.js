import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import moment from 'moment'
import { translate } from 'react-i18next';
import { ButtonComponent } from 'react-components-lib'

import AppDelete from './AppDelete'
import { JoyTheme } from '../../Style/JoyTheme'
import { Form } from '../../components/Layout'
import ButtonStyle from '../../Style/ButtonStyle'

const Button = styled(ButtonComponent)`
  ${ButtonStyle}
  background-color: ${props => props.background};
  color: ${props => props.color || JoyTheme.WHITE};
  height: 28px;
  font-size:12px;
  display:inline-block;
  min-width: 80px;
  min-height: 30px;
`

const Wrapper = styled.div`
  margin:10px;
`

const ListItem = styled.div`
  background-color: ${JoyTheme.WHITE};
  display: block;
  position: relative;
  height: 50px;
  :hover {
    background-color: ${JoyTheme.LIGHT};
  }
`

const Text = styled.div`
  display: inline-block;
  padding-top: 12px;
`

const Btn = styled.div`
  display: inline-block;
  padding-top: 10px;
  text-align: right;
`

const Pencil = <i className="fa fa-pencil" aria-hidden="true"></i>
export const Trash = <i className="fa fa-trash" aria-hidden="true"></i>
const Calendar = <i className="fa fa-calendar-o" aria-hidden="true"></i>
const Male = <i className="fa fa-male" aria-hidden="true" style={{ color: JoyTheme.LIGHT_NAVY }}></i>
const Female = <i className="fa fa-female" aria-hidden="true" style={{ color: JoyTheme.PINK }}></i>

export const getGenderIcon = (code) => {
  return code ?
    code === 'M' ? Male : Female : ' - '
}


class List extends React.Component {
  state = { isOpenDelete: false, selectedDeleteKey: null }

  handleDelete = (key) => {
    this.setState({
      isOpenDelete: !this.state.isOpenDelete,
      selectedDeleteKey: key
    })
  }

  render() {
    const { list = [], i18n } = this.props;

    return (
      <Wrapper>
        {this.state.isOpenDelete &&
          <AppDelete
            value={this.state.selectedDeleteKey}
            onClose={() => this.setState({ isOpenDelete: false })}
          />}

        {Object.keys(list).map((key, index) => {
          return (
            <ListItem key={`list-component-key-${key}`}>
              <Form >
                <Text className="tablet-1 phone-1" style={{ textAlign: 'center' }}>{index + 1}</Text>
                <Text className="tablet-4 phone-4">
                  {getGenderIcon(list[key].gender.value)}&nbsp;&nbsp;
                  {list[key].firstName.value} {list[key].lastName.value}
                </Text>
                <Text className="tablet-3 phone-3">
                  {Calendar} {moment(list[key].date).format('DD MMMM YYYY')}
                </Text>
                <Btn className="tablet-4 phone-4">
                  <div style={{ paddingRight: '10px' }}>
                    <Link to={`/AppEdit/${key}`} style={{ textDecoration: 'none' }}>
                      <Button label={i18n.t('edit')}
                        background={JoyTheme.LIGHT_NAVY}
                        leftIcon={Pencil} leftIconStyle={{ paddingRight: '10px' }}
                      />
                    </Link>
                    &nbsp;&nbsp;
                    <Button label={i18n.t('delete')}
                      background={JoyTheme.RED}
                      leftIcon={Trash} leftIconStyle={{ paddingRight: '10px' }}
                      onClick={() => this.handleDelete(key)}
                    />
                  </div>
                </Btn>
              </Form>
            </ListItem>
          )
        })}
      </Wrapper>
    )
  }
}

export default translate()(List);