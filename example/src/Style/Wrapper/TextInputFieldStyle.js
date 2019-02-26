import { css } from 'styled-components'
import TextInputStyle from '../ComponentStyle/TextInputStyle'
import BottomLabel from '../ComponentStyle/BottomLabelStyle'

export default css`
  .wrapper{
    /* margin: 20px 0px; */
  }

  .label{
    font-size:16px
  }

  .component{
    ${TextInputStyle}
  }

  .bottom-label{
    ${BottomLabel}
  }
`