import { connect } from 'react-redux'
import * as actions from '../../actions'
import DistrictListScreen from '../../screens/DistrictListScreen'


const mapDispatchToProps = (dispatch) => {
  return {
    loadDapilList: (list) => {
      dispatch(actions.loadAllDapil(list))
    },
    loadDistrictList: (list) => {
      dispatch(actions.loadAllDistricts(list))
    },
    loadVillageList: (list) => {
      dispatch(actions.loadAllVillages(list))
    }
  }
}

const mapStateToProps = (state, { navigator }) => {
  return {
    ...state,
    navigator: navigator,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DistrictListScreen);
