import { connect } from 'react-redux';
import Session from '../components/Session/Session.js';
import { 
        addActivity, 
        clearActivities, 
        deleteActivity,
        tick,
        toggleActivity 
       } from '../actions/SessionActions';

const mapStateToProps = (state) => {
  return {
    time: state.currentSession.time,
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
    },
    tick: () => {
      dispatch(tick())
    },
    toggleActivity: (id) => {
      dispatch(toggleActivity(id))
    }
  }
}

const sessionContainer = connect(mapStateToProps, mapDispatchToProps)(Session);

export default sessionContainer;
