import { Toast } from 'native-base'
import { create } from 'apisauce'

const API_ADDRESS = 'http://raja.uatwebsite.com/api'
const ACCESS_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjIyYzkwYmMxYjdhZDFlOGUyM2JjNzMwMWIwODIwNDY0NjQ2ZjczYjY1MjIzNDc1NWY4ZjA5ZWZmMjQwZDdhNjNlYmFjMjZiYTI2YzBkZDg1In0.eyJhdWQiOiIxIiwianRpIjoiMjJjOTBiYzFiN2FkMWU4ZTIzYmM3MzAxYjA4MjA0NjQ2NDZmNzNiNjUyMjM0NzU1ZjhmMDllZmYyNDBkN2E2M2ViYWMyNmJhMjZjMGRkODUiLCJpYXQiOjE1MDk4NjEyNDgsIm5iZiI6MTUwOTg2MTI0OCwiZXhwIjoxNTQxMzk3MjQ3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.Qhl4tw6xZLeTf38lyi5cvGU1BOKDOaDAxmA1P_g3X2kzM6WYRw5_zZtG_W3WUD9kPYJsJW1mucmcrUlSjP8nujPV9Rpp9dL5jUYSBAYJISzzwpEP5eCgG4-rhrXHbwpUtAOs3nhjbQF_vVMbB7Nfn3aXd435UrdbE1S6aybQUWEhs264uGq0QU-nn3F2ZIvEmdHwXkHx30B1Fdm0BFt-nh3Oew0M0j4uEWuvqJcB1BEdpR7yL-DMN1tqSy5-QpzWU3WAv6rsnnyniXu4eEgqzlhJiblhyArCuGXBdhbZ1rq-i2cQvpuQJu0Zuc8gXVaAwDlxjFi8ol9AI9mPOmQUJTbrnv-H2aqmugzMYFt1JZdSQ1Z0XEnOONW7lFtDkuaw3kjiUDtNdbAAwpX4ia18Jr_W23pZLVSRY1Lx6TwsM67Vza3VNlDPghlplfIk8n6mrniBVfPtQ4YxACxmJ923GkCidE_4D2EAHFzBBAhlZfa131BkjW5B4k99bfEgsDmU43yKOSllbx1qoXxtuR5UtIbolAtXtGLpow-w80augOSxgAPJr61gVPzJikVYVnWfNQx2Nj4XmRPXjrlo0cOr5MNlG8O25OELwiQCUYSBOqVWiTPNdFm9dGAqVU_kw8UiEqIuvQduZMgYzxpzYbg6-R5qyeULAcMFop9It31akpQ"


export async function saveData(dataInput, resetForm) {
  console.log(dataInput)
  // create api.
  const api = create({
    baseURL: `${API_ADDRESS}`,
  })

  api.setHeaders({
    'Authorization': `Bearer ${ACCESS_TOKEN}`,
  })

  // create formdata
  const data = new FormData();
  if (!dataInput.village) {
    dataInput.village = 1136
  }

    data.append('village', dataInput.village);
    data.append('name', dataInput.name);
    data.append('dob', dataInput.dob);
    data.append('address', dataInput.address);
    data.append('idNumber', dataInput.idNumber);
    data.append('phoneNumber', dataInput.phoneNumber);
    data.append('waNumber', dataInput.waNumber);
    data.append('photo', {
      uri: dataInput.photo,
      type: 'image/jpeg',
      name: 'profile_picture.jpg'
    });
    data.append('photoKTP', {
      uri: dataInput.photoKTP,
      type: 'image/jpeg',
      name: 'id_card_picture.jpg'
    });

  // post your data.
  api.post('/volunteer-register', data, {
    onUploadProgress: (e) => {
      // console.log(e)
      const progress = e.loaded / e.total;
      // console.log(progress);
      // this.setState({
      //   progress: progress
      // });

      Toast.show({
        text: `Sedang menyimpan data...`,
        position: 'bottom',
        type: 'warning',
        buttonText: '.'
      })
    }
  })
  .then((res) => {
    switch (res.data.status_code) {
      case 10:
        Toast.show({
          text: 'Data berhasil tersimpan!',
          position: 'bottom',
          type: 'success',
          buttonText: 'Tutup'
        })

        resetForm()
        break
      default:
        Toast.show({
          text: res.data.error.message,
          position: 'bottom',
          type: 'danger',
          buttonText: 'Tutup'
        })
        break
    }
  })
  .catch(error => {
    Toast.show({
      text: 'Data gagal tersimpan!',
      position: 'bottom',
      type: 'danger',
      buttonText: 'Tutup'
    })
  })
}


export async function loadAllDapil(reduxVar) {
  const url = `${API_ADDRESS}/dapils`

  return (
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${ACCESS_TOKEN}`
      },
      credentials: "same-origin"
    })
    .then(function(response) {
      return response.json()
    })
    .then((res) => {
      reduxVar.loadDapilList(res.data)
    })
    .catch(error => {
      Toast.show({
        text: 'Error!',
        position: 'bottom',
        type: 'danger',
        buttonText: 'Tutup'
      })
    })
  )
}

export async function loadAllDistricts(reduxVar) {
  const url = `${API_ADDRESS}/districts`

  return (
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${ACCESS_TOKEN}`
      },
      credentials: "same-origin"
    })
    .then(function(response) {
      return response.json()
    })
    .then((res) => {
      reduxVar.loadDistrictList(res.data)
    })
    .catch(error => {
      Toast.show({
        text: 'Error!',
        position: 'bottom',
        type: 'danger',
        buttonText: 'Tutup'
      })
    })
  )
}

export async function loadAllVillages(reduxVar) {
  const url = `${API_ADDRESS}/villages`

  return (
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${ACCESS_TOKEN}`
      },
      credentials: "same-origin"
    })
    .then(function(response) {
      return response.json()
    })
    .then((res) => {
      reduxVar.loadVillageList(res.data)
    })
    .catch(error => {
      Toast.show({
        text: 'Error!',
        position: 'bottom',
        type: 'danger',
        buttonText: 'Tutup'
      })
    })
  )
}

export async function loadVolunteers(reduxVar) {
  const url = `${API_ADDRESS}/volunteer-register`

  return (
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${ACCESS_TOKEN}`
      },
      credentials: "same-origin"
    })
    .then(function(response) {
      return response.json()
    })
    .then((res) => {
      console.log(res)
      console.log(reduxVar)
      reduxVar.loadVolunteerList(res.data)
    })
    .catch(error => {
      Toast.show({
        text: 'Error!',
        position: 'bottom',
        type: 'danger',
        buttonText: 'Tutup'
      })
    })
  )
}

export async function totalVolunteer(reduxVar) {
  const url = `${API_ADDRESS}/total-volunteer`

  return (
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${ACCESS_TOKEN}`
      },
      credentials: "same-origin"
    })
    .then(function(response) {
      return response.json()
    })
    .then((res) => {
      reduxVar.countTotalVolunteer(res.total_volunteer)
    })
    .catch(error => {
      Toast.show({
        text: 'Error!',
        position: 'bottom',
        type: 'danger',
        buttonText: 'Tutup'
      })
    })
  )
}
