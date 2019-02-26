import styled from 'styled-components'
import {
  withLabel,
  TextInputComponent,
  DropdownComponent,
  PopupSearchComponent,
  RadioComponent,
  CheckboxComponent,
  DatePickerComponent,
  TextareaComponent
} from 'react-components-lib'

// style
import TextInputStyle from '../../../Style/TextInputStyle'

const TextInputWithStyled = styled(TextInputComponent)`
  ${TextInputStyle};
`;
const TextareaWithStyle = styled(TextareaComponent)`
  ${TextInputStyle};
  padding: 14px 20px;
  height: 250px;
  resize: none;
`

const TextInput = withLabel(TextInputWithStyled);
const Dropdown = withLabel(DropdownComponent)
const PopupSearch = withLabel(PopupSearchComponent)
const Radio = withLabel(RadioComponent)
const Checkbox = CheckboxComponent
const DatePicker = withLabel(DatePickerComponent)
const Textarea = withLabel(TextareaWithStyle)

export {
  TextInput,
  Dropdown,
  PopupSearch,
  Radio,
  Checkbox,
  DatePicker,
  Textarea
}
