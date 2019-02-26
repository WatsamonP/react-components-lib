import _ from 'lodash'
import {
  SET_VALUE,
  CREATE_APP,
  DELETE_APP,
  REMOVE_VALUE
} from '../actions/type'

import { Joy } from './Joy'

const initState = { ...Joy }

export default (state = initState, action) => {
  switch (action.type) {
    case SET_VALUE:
      return {
        ...state,
        [action.payload.appId]: {
          ...state[action.payload.appId],
          [action.payload.fieldId]: { value: action.payload.value }
        }
      }
    case REMOVE_VALUE:
      return {
        ...state,
        [action.payload.appId]: {
          ..._.omit(state[action.payload.appId], [action.payload.fieldId]),
        }
      }
    case CREATE_APP:
      return { ...state, [action.payload.appId]: action.payload.value }
    case DELETE_APP:
      //
      return _.omit(state, [action.payload])
    default:
      return state;
  }
}