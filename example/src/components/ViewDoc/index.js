import React from 'react';
import styled from 'styled-components'
import { ButtonComponent } from 'react-components-lib'
// styled
import ButtonStyle from '../../Style/ComponentStyle/ButtonStyle'
import TitleStyle from '../../Style/Wrapper/Title'
import DocDetailStyle from '../../Style/Wrapper/DocDetail'

const Button = styled(ButtonComponent)`
  ${ButtonStyle}
`
const ViewButton = styled(Button)`
  min-width: 120px;
`
const Title = styled.div`${TitleStyle}`
const DisplayDoc = styled.div`${DocDetailStyle}`

class ViewDoc extends React.Component {

  state = { isViewDoc: false }

  handleViewDoc = () => {
    this.setState(prevState => ({
      isViewDoc: !prevState.isViewDoc
    }))
  }

  render() {
    // todo 
    const { title = 'title' } = this.props;
    return (
      <div>
        <Title>
          <div className="left">{title}</div>
          <div className="right">
            <ViewButton
              label={this.state.isViewDoc === true ? "hide" : "view Doc"}
              onClick={this.handleViewDoc} />
          </div>
        </Title>

        {this.state.isViewDoc && (
          <DisplayDoc>
            key // ex.
          </DisplayDoc>
        )}
      </div>
    )
  }
}

export default ViewDoc;