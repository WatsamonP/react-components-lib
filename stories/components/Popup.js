import React from 'react'
import styled from 'styled-components'
import Button from '../../src/components/base/Button'
import ButtonStyle from '../Styles/ButtonStyle'
import { JoyTheme } from '../Styles/JoyTheme'
import PictureSvg from '../assets/icon/picture.svg'

const Dashed = styled.div`
  border: 2px dashed ${JoyTheme.CREAM};
  margin-top: 20px;
`

const StatusButton = styled(Button)`
  ${ButtonStyle};
  width: 160px;
  position: absolute;
  right: 0px;
`

const PictureIcon = styled(PictureSvg)`
  width: 20px;
`

class Popup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      image: this.props.img,
      image2: this.props.img2,
      title: this.props.title
    }
  }


  handleOnClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { isOpen, image, image2, title } = this.state;
    const display = title ? title : 'Theme';
    return (
      <div>
        <div style={{ position: 'relative', paddingBottom: '20px' }}>
          <StatusButton
            onClick={this.handleOnClick}
            label={isOpen ? 'Close' : `${display} Config`}
            leftIcon={isOpen ? '' : <PictureIcon />}
            labelStyle={isOpen ? {} : { paddingBottom: '4px' }}
            leftIconStyle={isOpen ? {} : { paddingRight: '10px', paddingTop: '4px' }}
          />
        </div>
        {
          isOpen && (
            <Dashed>
              <img
                src={image}
                style={{ width: '100%' }} />

              {image2 && (
                <img
                  src={image2}
                  style={{ width: '100%' }} />
              )}
            </Dashed>
          )
        }
      </div >
    )
  }
}

export default Popup