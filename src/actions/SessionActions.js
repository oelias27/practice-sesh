import axios from 'axios';
import { browserHistory } from 'react-router';

const addActivity = (activity) => {
    return {
        type: 'ADD_ACTIVITY',
        activity
      }
}

const clearActivities = () => {
    return {
        type: 'CLEAR_ACTIVITIES'
      }
}

const deleteActivity = (id) => {
    return {
        type: 'DELETE_ACTIVITY',
        id
      }
}

const tick = (notes) => {
    return {
        type: 'TICK',
        notes
    }
}

const toggleActivity = (id) => {
    return {
        type: 'TOGGLE_ACTIVITY',
        id
    }
}


const sendSession = (session) => {
    const request = axios.post('http://localhost:3000/users/login', {
        session
    })

    return (dispatch) => {
        request.then(data => {
            dispatch({
                type: 'SESSION_SUBMITTED',
                session: data.session
            })

            browserHistory.push('/home');
        })
    }
}


export { addActivity, clearActivities, deleteActivity, tick, toggleActivity, sendSession };