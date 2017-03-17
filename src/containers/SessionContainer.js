import { connect } from 'react-redux';
import Session from '../components/Session/Session.js'

const mapStateToProps = (state) => {
  return {
    activities: state.currentSession.activities
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addActivity: (id, activity) => { 
      dispatch({
        type: 'ADD_ACTIVITY',
        activity
      })
    }
  }
}

const sessionContainer = connect(mapStateToProps, mapDispatchToProps)(Session);

export default sessionContainer;
