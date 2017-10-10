import { NEW_REGISTER, FB_LOGGED_IN } from '../constants'

export function newRegister(data) {
  return {
    type: NEW_REGISTER,
    ...data
  }
}

export function loggedIn(info) {
  return {
    type: FB_LOGGED_IN,
    accessToken: info.accessToken,
    loginStatus: info.loginStatus,
    loginType: info.loginType
  }
}
