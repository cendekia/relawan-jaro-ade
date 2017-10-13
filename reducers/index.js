import { combineReducers } from 'redux'
import {
  FB_LOGGED_IN,
  SET_VOLUNTEER_VILLAGE,
  SET_VOLUNTEER_DISTRICT,
  SET_VOLUNTEER_DAPIL,
  SET_VOLUNTEER_NAME,
  SET_VOLUNTEER_DOB,
  SET_VOLUNTEER_ADDRESS,
  SET_VOLUNTEER_NO_KTP,
  SET_VOLUNTEER_NO_HP,
  SET_VOLUNTEER_NO_WA,
  SET_VOLUNTEER_PHOTO,
  SET_VOLUNTEER_PHOTO_KTP,
} from '../constants'

const defaultState = {
  village: undefined,
  district: undefined,
  dapil: undefined,
  name: undefined,
  dob: undefined,
  address: undefined,
  idNumber: undefined,
  phoneNumber: undefined,
  waNumber: undefined,
  photo: undefined,
  photoKTP: undefined,
}

const logIn = (state = {}, action) => {
  switch (action.type) {
    case FB_LOGGED_IN:
      return {
        ...state,
        accessToken: action.accessToken,
        loginType: action.loginType,
        loginStatus: action.loginStatus,
      }
    default:
      return state
  }
}

const setVolunteerForm = (state = defaultState, action) => {
  switch (action.type) {
    case SET_VOLUNTEER_VILLAGE:
      return {
        ...state,
        village: action.village,
      }
      break
    case SET_VOLUNTEER_DISTRICT:
      return {
        ...state,
        district: action.district,
      }
      break
    case SET_VOLUNTEER_DAPIL:
      return {
        ...state,
        dapil: action.dapil,
      }
      break
    case SET_VOLUNTEER_NAME:
      return {
        ...state,
        name: action.name,
      }
      break
    case SET_VOLUNTEER_DOB:
      return {
        ...state,
        dob: action.dob,
      }
      break
    case SET_VOLUNTEER_ADDRESS:
      return {
        ...state,
        address: action.address,
      }
      break
    case SET_VOLUNTEER_NO_KTP:
      return {
        ...state,
        idNumber: action.idNumber,
      }
      break
    case SET_VOLUNTEER_NO_HP:
      return {
        ...state,
        phoneNumber: action.phoneNumber,
      }
      break
    case SET_VOLUNTEER_NO_WA:
      return {
        ...state,
        waNumber: action.waNumber,
      }
      break
    case SET_VOLUNTEER_PHOTO:
      return {
        ...state,
        photo: action.photo,
      }
      break
    case SET_VOLUNTEER_PHOTO_KTP:
      return {
        ...state,
        photoKTP: action.photoKTP,
      }
      break
    default:
      return state
  }
}

export default function getRootReducer(navReducer) {
    return combineReducers({
        nav: navReducer,
        loginResponse: logIn,
        volunteerForm: setVolunteerForm
    });
}
