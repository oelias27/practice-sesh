const initialState = {
  user: {
    id: null,
    username: null,
    authenticated: false,
    history: [],
    admin: null
  },

  currentSession: {
    id: 0,
    time: 0,
    active: false,
    activities: []
  }
}

export default initialState;
