import { NetInfo } from "react-native";
import { combineReducers } from 'redux'
import * as reduxConst from '../constants'

const initialState = {
  isConnected: false,
}

const defaultFormState = {
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
  createdDate: undefined,
  updatedDate: undefined,
}

const defaultVolunteerSavedData = {
  volunteerCollection: [],
  totalData: 0,
  lastAddedDate: undefined,
  uploadStatus: 'local'
}

const _formatDate = (date) => {
  if (date) {
    return date.toDateString() + ' ' + date.toLocaleTimeString(navigator.language, { hour:'2-digit', minute:'2-digit'});
  }
}

const date = new Date();
const formattedDate = _formatDate(date);

const logIn = (state = {}, action) => {
  switch (action.type) {
    case reduxConst.FB_LOGGED_IN:
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

const setVolunteerForm = (state = defaultFormState, action) => {
  switch (action.type) {
    case reduxConst.SET_VOLUNTEER_VILLAGE:
      return {
        ...state,
        village: action.village,
      }
      break
    case reduxConst.SET_VOLUNTEER_DISTRICT:
      return {
        ...state,
        district: action.district,
      }
      break
    case reduxConst.SET_VOLUNTEER_DAPIL:
      return {
        ...state,
        dapil: action.dapil,
      }
      break
    case reduxConst.SET_VOLUNTEER_NAME:
      return {
        ...state,
        name: action.name,
      }
      break
    case reduxConst.SET_VOLUNTEER_DOB:
      return {
        ...state,
        dob: action.dob,
      }
      break
    case reduxConst.SET_VOLUNTEER_ADDRESS:
      return {
        ...state,
        address: action.address,
      }
      break
    case reduxConst.SET_VOLUNTEER_NO_KTP:
      return {
        ...state,
        idNumber: action.idNumber,
      }
      break
    case reduxConst.SET_VOLUNTEER_NO_HP:
      return {
        ...state,
        phoneNumber: action.phoneNumber,
      }
      break
    case reduxConst.SET_VOLUNTEER_NO_WA:
      return {
        ...state,
        waNumber: action.waNumber,
      }
      break
    case reduxConst.SET_VOLUNTEER_PHOTO:
      return {
        ...state,
        photo: action.photo,
      }
      break
    case reduxConst.SET_VOLUNTEER_PHOTO_KTP:
      return {
        ...state,
        photoKTP: action.photoKTP,
      }
      break
    case reduxConst.SAVE_VOLUNTEER_DATA:
      return {
        ...state,
        createdDate: formattedDate,
      }
      break
    case reduxConst.UPDATE_VOLUNTEER_DATA:
      return {
        ...state,
        updatedDate: formattedDate,
      }
      break
    case reduxConst.RESET_VOLUNTEER_DATA:
      return defaultFormState
      break
    default:
      return state
  }
}

const volunteerCollection = (state = defaultVolunteerSavedData, action) => {
  switch (action.type) {
    case reduxConst.SAVE_VOLUNTEER_DATA:
      const newVolunteerData = [
        ...state.volunteerCollection,
        setVolunteerForm(action.volunteerData, action)
      ];

      return {
        ...state,
        totalData: ++state.totalData,
        lastAddedDate: date,
        volunteerCollection: newVolunteerData
      }
      break
    default:
      return state
  }
}

const internetCheck = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_CONNECTION_STATUS':
      return Object.assign({}, state, {
        isConnected: action.isConnected,
      });
    default:
      return state
  }
}

export default function getRootReducer(navReducer) {
    return combineReducers({
        nav: navReducer,
        loginResponse: logIn,
        volunteerForm: setVolunteerForm,
        volunteerCollection: volunteerCollection,
        internetCheck: internetCheck,
    });
}
