import { css } from 'styled-components'

export default (elementName = '') => css`
@media only screen and (max-width: 768px) {
  ${elementName}.phone-12 {
    width: 100%;
  }
  ${elementName}.phone-11 {
    width: calc(100%/12*11);
  }
  ${elementName}.phone-10 {
    width: calc(100%/1.2);
  }
  ${elementName}.phone-9 {
    width: calc(100%/12*9);
  }
  ${elementName}.phone-8 {
    width: calc(100%/12*8);
  }
  ${elementName}.phone-7 {
    width: calc(100%/12*7);
  }
  ${elementName}.phone-6 {
    width: 50%;
  }
  ${elementName}.phone-5 {
    width: calc(100%/2.4);
  }
  ${elementName}.phone-4-5 {
    width: calc(100%/2.65);
  }
  ${elementName}.phone-4 {
    width: calc(100%/3);
  }
  ${elementName}.phone-3 {
    width: calc(100%/4);
  }
  ${elementName}.phone-2 {
    width: calc(100%/6);
  }
  ${elementName}.phone-1 {
    width: calc(100%/12);
  }
}
@media only screen and (min-width: 769px) {
  ${elementName}.tablet-12 {
    width: 100%;
  }
  ${elementName}.tablet-11 {
    width: calc(100%/12*11);
  }
  ${elementName}.tablet-10 {
    width: calc(100%/1.2);
  }
  ${elementName}.tablet-9 {
    width: calc(100%/12*9);
  }
  ${elementName}.tablet-8 {
    width: calc(100%/12*8);
  }
  ${elementName}.tablet-7 {
    width: calc(100%/12*7);
  }
  ${elementName}.tablet-6 {
    width: 50%;
  }
  ${elementName}.tablet-5 {
    width: calc(100%/2.4);
  }
  ${elementName}.phone-4-5 {
    width: calc(100%/2.65);
  }
  ${elementName}.tablet-4 {
    width: calc(100%/3);
  }
  ${elementName}.tablet-3 {
    width: calc(100%/4);
  }
  ${elementName}.tablet-2 {
    width: calc(100%/6);
  }
  ${elementName}.tablet-1 {
    width: calc(100%/12);
  }
}
`
