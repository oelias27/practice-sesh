import { connect } from 'react-redux';
import Session from '../components/Session/Session.js'

const mapStateToProps = (state) => {
  return {
    activities: state.currentSession.activities
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addActivity: (activity) => { 
      dispatch({
        type: 'ADD_ACTIVITY',
        activity
      })
    },
    deleteActivity: (id) => {
      dispatch({
        type: 'DELETE_ACTIVITY',
        id
      })
    }
  }
}

const sessionContainer = connect(mapStateToProps, mapDispatchToProps)(Session);

export default sessionContainer;
