import { connect } from 'react-redux';
import Session from '../components/Session/Session.js'
import { 
        addActivity, 
        clearActivities, 
        deleteActivity 
        } from '../actions/SessionActions'

const mapStateToProps = (state) => {
  return {
    activities: state.currentSession.activities
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addActivity: (activity) => { 
      dispatch(addActivity(activity))
    },
    clearActivities: () => {
      dispatch(clearActivities())
    },
    deleteActivity: (id) => {
      dispatch((deleteActivity(id)))
    }
  }
}

const sessionContainer = connect(mapStateToProps, mapDispatchToProps)(Session);

export default sessionContainer;
