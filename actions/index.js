import { NEW_REGISTER } from '../constants'

export function newRegister(data) {
  return {
    type: NEW_REGISTER,
    ...data
  }
}
