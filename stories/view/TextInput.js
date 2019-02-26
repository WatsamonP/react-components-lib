import React from 'react';
import * as R from 'ramda'
import styled from 'styled-components'
import classnames from 'classnames'

// storybook
import { text, boolean } from '@storybook/addon-knobs/react';

// component
import TextInput from '../../src/components/base/TextInput'
import withLabel from '../../src/components/base/withLabel'
import Button from '../../src/components/base/Button'

// validation
import { EMAIL_ALLOW_KEYS, EMAIL_VALIDATION } from '../utils/regex'

// style_decorate
import TextInputStyle from '../Styles/TextInputStyle'
import withLabelStyle from '../Styles/withLabelStyle'
import ButtonStyle from '../Styles/ButtonStyle'
import CheckedIconSvg from '../assets/icon/checked-icon.svg'
import ReturnValue from '../components/ReturnValue'
import Popup from '../components/Popup'
import TextInputJpg from '../assets/images/TextInput.jpg'

// TextInput Component doesn't have styleConfig // use 'styled-components' 
const TextInputWithStyled = styled(TextInput)`${TextInputStyle}`;
const TextInputWithLabel = withLabel(TextInputWithStyled)
const MyButton = styled(Button)`
  ${ButtonStyle};
`

class TextInputSimpleUse extends React.Component {

  state = {
    email: {
      fieldId: 'email.fieldId',
      id: { testSectionId: "emailTestSectionId", testId: "emailTestId" },
      label: "INPUT EMAIL",
      required: true,
      error: false,
      placeholder: "ex. xxxxx@mail.com",
      value: '',
      requiredMessage: 'Required Field',
      errorMessage: 'Validation Error'
    },
    status: false
  }

  handleOnChange = (e) => {
    let { value } = e.target;
    let newState = { ...this.state.email, value: value };

    this.setState({ email: newState, status: false })
  }

  handleValidation = () => {
    let { email } = this.state;
    let newState = { ...this.state.email };

    if (!EMAIL_VALIDATION.test(email.value)) {
      this.setState({ status: false })
      newState = { ...newState, error: true };
    } else {
      this.setState({ status: true })
      newState = { ...newState, error: false };
    }

    this.setState({ email: newState })
  }

  render() {
    const { email } = this.state;

    const btnIsDisabled = () => (R.isEmpty(email.value) ? email.error : false)
    const btnIsError = () => (this.state.status ? <CheckedIconSvg /> : '');
    const btnIsErrorStyle = () => {
      return this.state.status ? {
        paddingLeft: '5px',
        paddingTop: '5px'
      } : {}
    };

    return (
      <div>

        <div style={{ paddingBottom: '10px' }}>
          <Popup img={TextInputJpg} title={'Style'} />
        </div>

        <TextInputWithLabel
          // withLabel Option
          label={text('🏷️ Label', email.label)}
          optionalLabel={text('🏷️ OptionalLabel', '(if any)')}
          required={boolean('🏷️ Required', email.required)}
          error={boolean('🏷️ Error', email.error)}
          requiredMessage={text('🏷️ RequiredMessage', email.requiredMessage)}
          errorMessage={text('🏷️ ErrorMessage', email.errorMessage)}

          // TextInputComponent
          fieldId={text('FieldId', email.fieldId)}
          id={text('ID', email.id)}
          placeholder={text('Placeholder', email.placeholder)}
          onChange={this.handleOnChange}
          value={email.value}
          regex={EMAIL_ALLOW_KEYS}
          disabled={boolean('Disabled', false)}
          className={classnames({ error: email.error })}

          // style
          wrapperStyle={withLabelStyle}
        />

        <div style={{ paddingTop: '10px' }}>
          <MyButton
            label="Email Validation"
            onClick={this.handleValidation}
            disabled={btnIsDisabled()}
            rightIcon={btnIsError()}
            rightIconStyle={btnIsErrorStyle()}
          />
        </div>


        {!R.isEmpty(this.state.email.value) &&
          <ReturnValue
            title={'TextInput Return'}
            optional={'(up to init State & handle Function)'}
            value={this.state.email}
            highlight={this.state.email.value}
          />
        }
      </div>
    )
  }
}

export default TextInputSimpleUse