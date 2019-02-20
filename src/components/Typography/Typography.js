import styled, { css } from 'styled-components'
import { Colors, Font } from '../../Style/constants'

const TypographyH1 = styled.h1`
  font-size: 40px;
  line-height: 48px;
  margin: 0;
  font-family: "${Font.BOLD}";
  clear: both;
`

const TypographyH2 = styled.h2`
  font-size: 33px;
  line-height: 39px;
  margin: 0;
  font-family: "${Font.BOLD}";
  clear: both;
  &.padding-top {
    padding-top:18px;
  }
`

export const TypographyLabelStyle = css`
  font-size: 28px;
  line-height: 34px;
  font-family: "${Font.DEFAULT}";
  clear: both;
`

const TypographyLabel1 = styled.span`
  ${TypographyLabelStyle}
  font-family: "${Font.BOLD}";
`

const TypographyInfo = styled(TypographyLabel1)`
  font-family: "${Font.DEFAULT}";
  font-style: italic;
  clear: both;
`

const TypographyLabel2 = styled.span`
  ${TypographyLabelStyle}
`

const TypographyLabel3 = styled(TypographyLabel1)`
  font-family: "${Font.DEFAULT}";
  font-size: 24px;
  line-height: 29px;
`

const TypographyLabel4 = styled(TypographyLabel1)`
  font-family: "${Font.BOLD}";
  font-size: 20px;
  line-height: 24px;
`

const TypographyLabel5 = styled(TypographyLabel1)`
  font-family: "${Font.DEFAULT}";
  font-size: 20px;	
  line-height: 24px;
`

const TypographyLabel6 = styled(TypographyLabel1)`
  font-family: "${Font.DEFAULT}";
  font-size: 18px;
  line-height: 21px;
`

const TypographyBody = styled.div`
  font-size: 28px;
  line-height: 34px;
  padding-top: 44px;
  width: 100%;
  height: 100%;
  color: ${Colors.TUNDORA};
  background: ${Colors.PORCELAIN};
  font-family: "${Font.DEFAULT}";
`

const TypographyError = styled.span`
  color: ${Colors.CINNABAR};
  font-size: 28px;
  line-height: 34px;
  font-family: "${Font.DEFAULT}";
`


export const ShortLabel = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const H1 = TypographyH1
export const H2 = TypographyH2
export const Label1 = TypographyLabel1
export const Label2 = TypographyLabel2
export const Label3 = TypographyLabel3
export const Label4 = TypographyLabel4
export const Label5 = TypographyLabel5
export const Label6 = TypographyLabel6
export const Info = TypographyInfo
export const Body = TypographyBody
export const Error = TypographyError
