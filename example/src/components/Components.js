import styled from 'styled-components'
import { ButtonComponent } from 'react-components-lib'
import ButtonStyle from '../Style/ComponentStyle/ButtonStyle'

export const Button = styled(ButtonComponent)`
  ${ButtonStyle}
`

export const ViewButton = styled(Button)`
  min-width: 120px;
`