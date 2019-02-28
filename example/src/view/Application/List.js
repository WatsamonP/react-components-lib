import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import moment from 'moment'
import { translate } from 'react-i18next';
import { ButtonComponent } from 'react-components-lib'
import 'moment/locale/th'

import AppDelete from './AppDelete'
import { JoyTheme } from '../../Style/JoyTheme'
import { Form } from '../../components/Layout'
import ButtonStyle from '../../Style/ButtonStyle'
import { Pencil, Trash, Calendar, Male, Female } from '../../components/Icon'

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
const Text = styled.p`
  display: inline-block;
  padding-top: 10px;
`
const Btn = styled.div`
  display: inline-block;
  padding-top: 10px;
  text-align: right;
`
export const getGenderIcon = (code) => {
  return code ?
    code === 'M' ? Male : Female : ' - '
}

class List extends React.Component {
  state = { isOpenDelete: false, selectedDeleteKey: null }

  handleDelete = (key) => {
    this.setState(prevState => ({
      selectedDeleteKey: key,
      isOpenDelete: !prevState.isOpenDelete
    }))
  }

  displayDeleteAlert = () => {
    const { isOpenDelete, selectedDeleteKey } = this.state;
    return (
      isOpenDelete &&
      <AppDelete
        value={selectedDeleteKey}
        onClose={() => this.setState({ isOpenDelete: false })}
      />
    )
  }

  render() {
    const { list = [], i18n } = this.props;
    moment.locale(i18n.language)
    const displayDate = (date) => {
      const dateMonth = moment(date).format('DD MMMM')
      const year = i18n.language === 'th' ? Number(moment(date).format('YYYY')) + 543 : moment(date).format('YYYY')
      return `${dateMonth} ${year}`
    }

    return (
      <Wrapper>
        {this.displayDeleteAlert()}
        {Object.keys(list).map((key, index) => {
          return (
            <ListItem key={`list-component-key-${key}`}>
              <Form >
                <Text className="tablet-1 phone-1" style={{ textAlign: 'center' }}>
                  {index + 1}
                </Text>
                <Text className="tablet-4 phone-4">
                  <span style={{ paddingRight: '10px' }}>
                    {getGenderIcon(list[key].gender.value)}
                  </span>
                  {list[key].firstName.value} {list[key].lastName.value}
                </Text>
                <Text className="tablet-3 phone-3">
                  {Calendar} {displayDate(list[key].date)}
                </Text>
                <Btn className="tablet-4 phone-4">
                  <div style={{ paddingRight: '10px' }}>
                    <Link to={`/AppEdit/${key}`} style={{ textDecoration: 'none', marginRight: '10px' }}>
                      <Button label={i18n.t('edit')}
                        background={JoyTheme.LIGHT_NAVY}
                        leftIcon={Pencil} leftIconStyle={{ paddingRight: '10px' }}
                      />
                    </Link>
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