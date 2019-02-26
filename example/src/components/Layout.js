import styled from 'styled-components';
import Responsive from '../Style/Responsive'
import { JoyTheme } from '../Style/JoyTheme';

export const Form = styled.div`
  ${Responsive('div')};
  display: flex;
  flex-wrap: wrap;
  > * {
    flex-grow: 1;
  }
`
export const ItemWrapper = styled.div`
  margin-right: 5px;
  :last-child {
    margin-left: 5px;
  }
  margin-bottom: 20px;
`

export const Line = styled.div`
  border-bottom: 2px solid ${JoyTheme.LIGHT_GREY};
  box-shadow: 0 20px 20px -20px ${JoyTheme.GREY};
  margin-top: 20px;
  margin-bottom: 20px;
`