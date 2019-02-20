import React from 'react'
import classnames from 'classnames'

// storybook
import { text, boolean, select } from '@storybook/addon-knobs/react';
import { LANGUAGE_LIST } from '../utils/KnobSelectList'

// component
import Dropdown from '../../src/components/base/Dropdown'
import withLabel from '../../src/components/base/withLabel'
const DropdownWithLabel = withLabel(Dropdown);


// style
import DropdownStyle from '../Styles/DropdownStyle'
import withLabelStyle from '../Styles/withLabelStyle'
import ReturnValue from '../components/ReturnValue'
import Popup from '../components/Popup'
import DropdownJpg from '../assets/images/Dropdown.jpg'

// data
import master from '../utils/master.json'

const getCurrentLanguage = () => ('th')

class SimpleDropdown extends React.Component {

  state = {
    identityResources: {
      label: 'Identity Resources',
      value: null,
      options: master.identityResources,
      placeholder: 'เอกสารที่ใช้แสดง',
      error: false,
      required: true,
      requiredMessage: 'Required Field',
      errorMessage: 'Hello Error',
      id: {
        testSectionId: 'testSectionId',
        testId: 'testId'
      },
    }
  }

  handleSelectOption = (selectedOption) => {
    let newState = { ...this.state.identityResources, value: selectedOption };

    this.setState({ identityResources: newState })
  }

  render() {

    const { identityResources } = this.state;

    return (
      <div>
        <div style={{ paddingBottom: '20px' }}>
          <Popup title={'Style'} img={DropdownJpg} />
        </div>

        <DropdownWithLabel
          value={identityResources.value}
          id={identityResources.id}
          options={identityResources.options}
          placeholder={text("Placeholder", identityResources.placeholder)}
          onClick={this.handleSelectOption}
          currentLanguage={select("CurrentLanguage", LANGUAGE_LIST, getCurrentLanguage())}
          styleConfig={DropdownStyle}
          disabled={boolean("Disabled", false)}
          className={classnames({ disabled: boolean("Disabled", false) })}

          // withLabel Option
          label={text('🏷️ Label', identityResources.label)}
          optionalLabel={text('🏷️ OptionalLabel', '(if any)')}
          required={boolean('🏷️ Required', identityResources.required)}
          error={boolean('🏷️ Error', identityResources.error)}
          requiredMessage={text('🏷️ RequiredMessage', identityResources.requiredMessage)}
          errorMessage={text('🏷️ ErrorMessage', identityResources.errorMessage)}
          wrapperStyle={withLabelStyle}
        />

        <ReturnValue
          value={identityResources.value}
        />
      </div>
    )
  }
}

export default SimpleDropdown