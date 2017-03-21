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

const tick = () => {
    return {
        type: 'TICK'
    }
}

const toggleActivity = (id) => {
    return {
        type: 'TOGGLE_ACTIVITY',
        id
    }
}

export { addActivity, clearActivities, deleteActivity, tick, toggleActivity };