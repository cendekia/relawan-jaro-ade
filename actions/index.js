import * as reduxConst from '../constants'

export function setVolunteerVillage(village) {
  return {
    type: reduxConst.SET_VOLUNTEER_VILLAGE,
    village
  }
}

export function setVolunteerDistrict(district) {
  return {
    type: reduxConst.SET_VOLUNTEER_DISTRICT,
    district
  }
}

export function setVolunteerDapil(dapil) {
  return {
    type: reduxConst.SET_VOLUNTEER_DAPIL,
    dapil
  }
}

export function setVolunteerName(name) {
  return {
    type: reduxConst.SET_VOLUNTEER_NAME,
    name
  }
}


export function setVolunteerDob(dob) {
  return {
    type: reduxConst.SET_VOLUNTEER_DOB,
    dob
  }
}

export function setVolunteerAddress(address) {
  return {
    type: reduxConst.SET_VOLUNTEER_ADDRESS,
    address
  }
}

export function setVolunteerNoKTP(idNumber) {
  return {
    type: reduxConst.SET_VOLUNTEER_NO_KTP,
    idNumber
  }
}

export function setVolunteerNoHP(phoneNumber) {
  return {
    type: reduxConst.SET_VOLUNTEER_NO_HP,
    phoneNumber
  }
}

export function setVolunteerNoWA(waNumber) {
  return {
    type: reduxConst.SET_VOLUNTEER_NO_WA,
    waNumber
  }
}

export function setVolunteerPhoto(photo) {
  return {
    type: reduxConst.SET_VOLUNTEER_PHOTO,
    photo
  }
}

export function setVolunteerPhotoKTP(photoKTP) {
  return {
    type: reduxConst.SET_VOLUNTEER_PHOTO_KTP,
    photoKTP
  }
}

export function loggedIn(info) {
  return {
    type: reduxConst.FB_LOGGED_IN,
    accessToken: info.accessToken,
    loginStatus: info.loginStatus,
    loginType: info.loginType
  }
}
