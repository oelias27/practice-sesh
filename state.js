const state = {
  user: {
    id: Number,
    username: String,
    authenticated: Boolean,
  },


  history: {
    sessions: [
      {

      }
    ]
  },


  currentSession: {
    id: Number,
    time: Number,
    active: Boolean,
    activities: [
      {
        title: String,
        time: Number,
      }
    ]
  }


  
}
