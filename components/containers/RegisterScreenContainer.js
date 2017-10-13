import { connect } from 'react-redux'
import * as actions from '../../actions'
import RegisterScreen from '../../screens/RegisterScreen'


const mapDispatchToProps = (dispatch) => {
  return {
    setVillage: (village) => {
      dispatch(actions.setVolunteerVillage(village))
    },
    setDistrict:(district) => {
      dispatch(actions.setVolunteerDistrict(district))
    },
    setDapil:(dapil) => {
      dispatch(actions.setVolunteerDapil(dapil))
    },
    setName: (name) => {
      dispatch(actions.setVolunteerName(name))
    },
    setDob:(dob) => {
      dispatch(actions.setVolunteerDob(dob))
    },
    setAddress:(address) => {
      dispatch(actions.setVolunteerAddress(address))
    },
    setNoKTP:(idNumber) => {
      dispatch(actions.setVolunteerNoKTP(idNumber))
    },
    setNoHP:(phoneNumber) => {
      dispatch(actions.setVolunteerNoHP(phoneNumber))
    },
    setNoWA:(waNumber) => {
      dispatch(actions.setVolunteerNoWA(waNumber))
    },
    setPhoto:(photo) => {
      dispatch(actions.setVolunteerPhoto(photo))
    },
    setPhotoKTP:(photoKTP) => {
      dispatch(actions.setVolunteerPhotoKTP(photoKTP))
    },
  }
}

const mapStateToProps = (state, { navigator }) => {
  return {
    ...state,
    navigator: navigator,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
