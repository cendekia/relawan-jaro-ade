import { combineReducers } from 'redux'
import { NEW_REGISTER, FB_LOGGED_IN } from '../constants'

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

const addNewRegister = (state = {}, action) => {
  switch (action.type) {
    case NEW_REGISTER:
      return {
        ...state,
        village: action.village,
        district: action.district,
        dapil: action.dapil,
        name: action.name,
        dob: action.dob,
        address: action.address,
        idCard: action.idCard,
        mobilePhone: action.mobilePhone,
        status: action.status,
        idCardImage: action.idCardImage,
        profilePicture: action.profilePicture,
      }
    default:
      return state
  }
}

export default function getRootReducer(navReducer) {
    return combineReducers({
        nav: navReducer,
        loginResponse: logIn,
        newRegister: addNewRegister
    });
}
