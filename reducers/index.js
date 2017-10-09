import { combineReducers } from 'redux'
import { NEW_REGISTER } from '../constants'

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
        newRegister: addNewRegister
    });
}
