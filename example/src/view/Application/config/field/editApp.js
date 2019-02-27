import * as R from 'ramda'
import master from '../../../../data/master.json'
import { fieldCreate } from './createApp'
import { NUMBER_AND_DOT_ONLY } from '../../../../utils/regex'
import { WeightOptions } from './otherOptions'

const mapDistrict = () => {
  return master.zipDistrict.map(data => {

    const mapLabel = ({ translations, zipCode }, lang) => {
      const getDistrict = R.pathOr({}, [lang], translations)
      return `${getDistrict.district} >> ${getDistrict.province} >> ${zipCode}`
    }
    return {
      ...data,
      translations: {
        th: {
          ...data.translations.th,
          label: mapLabel(data, 'th')
        },
        en: {
          ...data.translations.en,
          label: mapLabel(data, 'en')
        },
      },
    }
  })
}

export const fieldEdit = {
  firstName: {
    ...fieldCreate.firstName,
    disabled: true
  },
  lastName: {
    ...fieldCreate.lastName,
    disabled: true
  },
  birthDate: {
    action: 'DatePicker',
    className: 'tablet-6 phone-6',
    value: "",
    label: 'birthdate',
    placeholder: 'date-format'
  },
  address: {
    action: 'PopupSearch',
    className: 'tablet-6 phone-6',
    value: {},
    label: 'address',
    options: mapDistrict(),
    // zipDistrict
    columns: "address",
    placeholder: 'address'
  },
  identityResources: {
    action: 'Dropdown',
    className: 'tablet-6 phone-6',
    options: master.identityResources,
    value: null,
    label: 'document-identify',
    placeholder: 'document-identify'
  },
  otherIdentityResources: {
    action: 'TextInput',
    className: 'tablet-6 phone-6',
    hidden: true,
    value: '',
    label: 'please-fill',
    required: true,
    placeholder: 'please-fill'
  },
  identityNo: {
    action: 'TextInput',
    className: 'tablet-6 phone-6',
    value: '',
    label: 'document-no',
    hidden: true,
  },
  weightQuestion: {
    action: 'Radio',
    className: 'tablet-9 phone-9',
    label: 'weight-question',
    options: WeightOptions
  },
  weightQuestionDetail: {
    action: 'TextInput',
    className: 'tablet-3 phone-3',
    hidden: true,
    // required: true,
    placeholder: 'XX.XX',
    regex: NUMBER_AND_DOT_ONLY,
    label: 'weight-change-val'
  },
  healthQues1: {
    action: 'Checkbox',
    options: master.healthQues1,
    className: 'tablet-12 phone-12',
    value: {},
    label: 'healthQuestion1',
    id: { testId: 'testId', testSectionId: 'testSectionId' },
  },
  healthQues1Detail: {
    value: { list: [] }
  },
  additional: {
    action: 'Textarea',
    label: "additional",
    className: 'tablet-12 phone-12',
    placeholder: 'additional',
    value: '',
  }
}

export default fieldEdit;