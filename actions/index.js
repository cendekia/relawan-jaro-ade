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

export function resetVolunteerForm() {
  return {
    type: reduxConst.RESET_VOLUNTEER_DATA,
  }
}

export function saveVolunteerData(volunteerData) {
  return {
    type: reduxConst.SAVE_VOLUNTEER_DATA,
    volunteerData
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

export function connectionState(status) {
  return {
    type: 'CHANGE_CONNECTION_STATUS',
    isConnected: status
  }
}


export function loadAllDapil(list) {
  return {
    type: reduxConst.LOAD_DAPIL_LIST,
    dapilList: list
  }
}

export function totalVolunteer(total) {
  return {
    type: reduxConst.COUNT_TOTAL_VOLUNTEER,
    totalRelawan: total
  }
}

export function loadAllVillages(list) {
  return {
    type: reduxConst.LOAD_VILLAGE_LIST,
    villageList: list
  }
}

export function loadAllDistricts(list) {
  return {
    type: reduxConst.LOAD_DISTRICT_LIST,
    districtList: list
  }
}

export function loadVolunteers(list) {
  return {
    type: reduxConst.LOAD_VOLUNTEER_LIST,
    volunteerList: list
  }
}
