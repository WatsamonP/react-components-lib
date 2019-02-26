import {
  SET_VALUE,
  SIGN_IN,
  SIGN_OUT,
  CREATE_APP,
  DELETE_APP,
  REMOVE_VALUE
} from './type';
import history from '../history';

// action จะทำ ? 
// มี key --> type
export const setValue = (appId, fieldId, value) => {
  return {
    type: SET_VALUE,
    payload: { appId, fieldId, value }
  }
}

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  }
}

export const signOut = {
  type: SIGN_OUT
}

export const createApp = (appId, value) => {
  history.push('/')
  return {
    type: CREATE_APP,
    payload: { appId, value }
  }
}


export const deleteApp = (appId) => {
  history.push('/');
  return {
    type: DELETE_APP,
    payload: appId
  }
}

export const removeValue = (appId, fieldId) => {
  return {
    type: REMOVE_VALUE,
    payload: { appId, fieldId }
  }
}
