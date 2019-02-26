import master from '../../../../data/master.json'

export const fieldCreate = {
  blank: { className: 'tablet-6 phone-6' },
  gender: {
    action: "Radio",
    label: 'gender',
    required: true,
    options: master.genders,
    value: null,
    className: 'tablet-6 phone-6',
    requiredMessage: "please-select",
  },
  firstName: {
    action: "TextInput",
    label: 'firstName',
    required: true,
    placeholder: 'firstName',
    value: "",
    className: 'tablet-6 phone-6'
  },
  lastName: {
    action: "TextInput",
    label: 'lastName',
    required: true,
    placeholder: 'lastName',
    value: "",
    className: 'tablet-6 phone-6'
  }
}

export default fieldCreate;