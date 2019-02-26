import styled from 'styled-components'
import { Colors } from '../constants/styles'
import TitleStyle from '../Style/Wrapper/Title'
import DocDetailStyle from '../Style/Wrapper/DocDetail'
import CardStyle from '../Style/Wrapper/CardStyle'

export const Card = styled.div`${CardStyle}`

export const Title = styled.div`${TitleStyle}`

export const Line = styled.p`
  border-bottom: solid 1px ${Colors.BLUE};
`

export const Container = styled.div`
  margin: 20px;
`

export const FooterButton = styled.div`
  padding-top: 15px;
  float: right;
`

export const DisplayDoc = styled.div`${DocDetailStyle}`