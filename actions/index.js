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


export function setVolunteerVillage(village) {
  return {
    type: SET_VOLUNTEER_VILLAGE,
    village
  }
}

export function setVolunteerDistrict(district) {
  return {
    type: SET_VOLUNTEER_DISTRICT,
    district
  }
}

export function setVolunteerDapil(dapil) {
  return {
    type: SET_VOLUNTEER_DAPIL,
    dapil
  }
}

export function setVolunteerName(name) {
  return {
    type: SET_VOLUNTEER_NAME,
    name
  }
}


export function setVolunteerDob(dob) {
  return {
    type: SET_VOLUNTEER_DOB,
    dob
  }
}

export function setVolunteerAddress(address) {
  return {
    type: SET_VOLUNTEER_ADDRESS,
    address
  }
}

export function setVolunteerNoKTP(idNumber) {
  return {
    type: SET_VOLUNTEER_NO_KTP,
    idNumber
  }
}

export function setVolunteerNoHP(phoneNumber) {
  return {
    type: SET_VOLUNTEER_NO_HP,
    phoneNumber
  }
}

export function setVolunteerNoWA(waNumber) {
  return {
    type: SET_VOLUNTEER_NO_WA,
    waNumber
  }
}

export function setVolunteerPhoto(photo) {
  return {
    type: SET_VOLUNTEER_PHOTO,
    photo
  }
}

export function setVolunteerPhotoKTP(photoKTP) {
  return {
    type: SET_VOLUNTEER_PHOTO_KTP,
    photoKTP
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
