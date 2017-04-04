import moment from 'moment';

/**
 * Utility function to generate random 
 * history for dev purposes.
 * 
 * @returns {Object Array} Array of objects, each obj is a day's sessions 
 */
const generateHistory = () => {

  let history = [];

  let currentTime = Date.now() / 1000;
  let startingTime = currentTime - 32140800;

  for (let i = 0; i < 371; i++) {
  
    let dayStats = {
      day: moment.unix(startingTime).format("dddd, MMMM Do YYYY"),
      hoursPracticed: Math.floor(Math.random() * 8)
    }
    history.push(dayStats);
    startingTime += 86400;
  }
  return history;
}

export default generateHistory;